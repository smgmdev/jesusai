export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getSupabase } from '../../../lib/supabase'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as File
  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 })

  const allowed = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg']
  if (!allowed.includes(file.type)) {
    return NextResponse.json({ error: 'Only MP3, WAV, OGG files allowed' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const filename = `audio/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

  const supabase = getSupabase()
  const { error } = await supabase.storage
    .from('audio')
    .upload(filename, buffer, { contentType: file.type, upsert: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data } = supabase.storage.from('audio').getPublicUrl(filename)
  return NextResponse.json({ url: data.publicUrl })
}
