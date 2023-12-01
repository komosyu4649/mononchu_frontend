'use client'

import EmojiPicker, { EmojiClickData, EmojiStyle } from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  id: string
  label: string
  onEmojiSelect?: (emoji: EmojiClickData) => void
  initEmoji?: string
}
const EmojiSelectBox = (props: Props) => {
  const { id, label, onEmojiSelect, initEmoji } = props

  const extractHexFromHtmlEntity = (initEmoji: string | undefined) => {
    if (!initEmoji) return null
    const matches = initEmoji.match(/&#(\d+);/)
    if (matches && matches[1]) {
      const decimalValue = parseInt(matches[1], 10)
      return decimalValue.toString(16)
    }
    return null
  }
  const convertUnicodeToEmoji = (unicode: any) => {
    const codePoint = parseInt(unicode, 16)
    return String.fromCodePoint(codePoint)
  }
  const hex = extractHexFromHtmlEntity(initEmoji)
  const emoji = hex ? convertUnicodeToEmoji(hex) : null

  const initialEmoji = {
    activeSkinTone: 'neutral',
    emoji: emoji || '😀',
    getImageUrl: (EmojiStyle.APPLE, '64'),
    imageUrl: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f600.png',
    isCustom: false,
    names: ['grinning', 'grinning face'],
    unified: '1f600',
    unifiedWithoutSkinTone: '1f600',
  }
  const inputRef = useRef<HTMLDivElement>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [chosenEmoji, setChosenEmoji] = useState<any>(initialEmoji)
  const onEmojiClick = (emojiObject: EmojiClickData, event: any) => {
    setChosenEmoji(emojiObject)
    onEmojiSelect?.(emojiObject)
  }
  useEffect(() => {
    const el = inputRef.current

    const hundleClick = (e: MouseEvent) => {
      if (el?.contains(e.target as Node)) {
        setShowPicker(true)
      } else {
        setShowPicker(false)
      }
    }

    document.addEventListener('click', hundleClick)

    return () => {
      document.removeEventListener('click', hundleClick)
    }
  }, [inputRef])
  return (
    <div className='w-full px-3 relative' ref={inputRef}>
      <label htmlFor={id} className='flex flex-col gap-3'>
        <span className='text-[1.4rem] font-bold'>{label}</span>
        <input
          className='inline-block w-full p-4 text-[2.2rem] bg-gray leading-none border border-line rounded-md'
          type='button'
          id={id}
          value={chosenEmoji.emoji}
        />
      </label>
      <div className={'absolute top-44 -left-8' + (showPicker ? '' : ' hidden')}>
        <EmojiPicker onEmojiClick={(emoji, e) => onEmojiClick(emoji, e)} />
      </div>
    </div>
  )
}

export default EmojiSelectBox
