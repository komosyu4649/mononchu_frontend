'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Modal from '../Modal'
import Input from '../Input'
import Image from 'next/image'
import Button from '../Button'
import { StuffProperty, StuffWant } from '@/type'
import axios from 'axios'

type Props = {
  type: 'property' | 'want'
  itemDetailData: StuffProperty | StuffWant
  category: string
}

const ItemModals = (props: Props) => {
  const { type, itemDetailData, category } = props
  const router = usePathname()
  const searchParams = useSearchParams()
  const crud = searchParams.get('crud')

  const params = new URLSearchParams(searchParams.toString())
  params.delete('crud')

  const closeLink = {
    pathname: router,
    query: Object.fromEntries(params),
  }
  const { id, name, thumbnail, score, price, address, purchaseDate, purchasePlace } =
    itemDetailData as StuffProperty
  const { brand, url, conditions } = itemDetailData as StuffWant
  const [itemName, setItemName] = useState<string>(name)
  const [itemThumbnail, setItemThumbnail] = useState<string>(thumbnail)
  const [itemScore, setItemScore] = useState<number>(score)
  const [itemPrice, setItemPrice] = useState<number>(price)
  // property
  const [itemAddress, setItemAddress] = useState<string>(address)
  const [itemPurchaseDate, setItemPurchaseDate] = useState<string>(purchaseDate)
  const [itemPurchasePlace, setItemPurchasePlace] = useState<string>(purchasePlace)
  // want
  const [itemBrand, setItemBrand] = useState<string>(brand)
  const [itemUrl, setItemUrl] = useState<string>(url)
  const [itemAsset, setItemAsset] = useState<string>(conditions?.asset)
  const [itemPeriod, setItemPeriod] = useState<string>(conditions?.period)
  const [itemProperty, setItemProperty] = useState<number>(conditions?.property)

  const onSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (type === 'property') {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_NEST_API}/stuff/${type}/edit/${category}/${id}`,
          {
            name: itemName,
            thumbnail: itemThumbnail,
            score: itemScore,
            price: itemPrice,
            address: itemAddress,
            purchaseDate: itemPurchaseDate,
            purchasePlace: itemPurchasePlace,
          },
        )
        return res
      } else {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_NEST_API}/stuff/${type}/edit/${category}/${id}`,
          {
            name: itemName,
            thumbnail: itemThumbnail,
            score: itemScore,
            price: itemPrice,
            brand: itemBrand,
            url: itemUrl,
            conditions: {
              asset: itemAsset,
              period: itemPeriod,
              property: itemProperty,
            },
          },
        )
        return res
      }
    } catch (error) {
      console.log(`${type} edit error`, error)
    }
  }

  const onClickDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_NEST_API}/stuff/${type}/delete/${category}/${id}`,
    )
    return res
  }

  const onSubmitMove = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_NEST_API}/stuff/want/to-property/${category}/${id}`,
        {
          name: itemName,
          thumbnail: itemThumbnail,
          score: itemScore,
          price: itemPrice,
          address: itemAddress,
          purchaseDate: itemPurchaseDate,
          purchasePlace: itemPurchasePlace,
        },
      )
      return res
    } catch (error) {
      console.log(`${type} edit error`, error)
    }
  }

  return (
    <>
      {crud === 'edit' && (
        <Modal param='crud'>
          <form action='' className='' onSubmit={onSubmitEdit}>
            <div className='flex flex-col gap-8 mb-12'>
              <>
                <Input
                  id='item-name'
                  label='アイテム名'
                  placeholder='アイテム名を入力してください'
                  value={itemName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemName(e.target.value)}
                />
                <label htmlFor='item-thumbnail' className='flex flex-col gap-3'>
                  <span className='text-[1.4rem] font-bold'>サムネイル</span>
                  <div className='flex flex-row gap-4 items-center'>
                    <div className='h-fit p-3 bg-black rounded-full'>
                      <Image
                        src='/assets/img/common/icon_picture.svg'
                        alt='画像'
                        width={100}
                        height={100}
                        className='w-6 h-6'
                      />
                    </div>
                    <span className='text-defaultText'>画像をアップロード</span>
                    <input
                      id='item-thumbnail'
                      type='file'
                      className='hidden'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files && e.target.files[0]) {
                          setItemThumbnail(URL.createObjectURL(e.target.files[0]))
                        }
                      }}
                    />
                  </div>
                </label>
                <Input
                  id='item-score'
                  label='スコア'
                  placeholder='80'
                  value={itemScore}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItemScore(e.target.value as unknown as number)
                  }
                />
                <Input
                  id='item-price'
                  label='価格'
                  placeholder='12,000'
                  value={itemPrice}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setItemPrice(e.target.value as unknown as number)
                  }
                />
                {type === 'property' && (
                  <>
                    <Input
                      id='item-address'
                      label='住所'
                      placeholder='衣装ケース'
                      value={itemAddress}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setItemAddress(e.target.value)
                      }
                    />
                    <Input
                      id='item-date'
                      label='購入日'
                      placeholder='2019/10/10'
                      value={itemPurchaseDate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setItemPurchaseDate(e.target.value)
                      }
                    />
                    <Input
                      id='item-place'
                      label='購入場所'
                      placeholder='青山のオーラリー'
                      value={itemPurchasePlace}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setItemPurchasePlace(e.target.value)
                      }
                    />
                  </>
                )}
                {type === 'want' && (
                  <>
                    <Input
                      id='item-brand'
                      label='ブランド'
                      placeholder='hermes'
                      value={itemBrand}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setItemBrand(e.target.value)
                      }
                    />
                    <Input
                      id='item-url'
                      label='URL'
                      placeholder='https://mononchu.com'
                      value={itemUrl}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setItemUrl(e.target.value)
                      }
                    />
                    <div className=''>
                      <span className='text-[1.4rem] font-bold'>購入条件</span>
                      <div className='flex flex-col gap-4 mt-4 p-6 bg-gray border border-line rounded-md'>
                        <Input
                          id='item-asset'
                          label='資産額(いくらになったら？)'
                          placeholder='目標資産額を入力してください'
                          size='sm'
                          value={itemAsset}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setItemAsset(e.target.value)
                          }
                        />
                        <Input
                          id='item-period'
                          label='期間(いつ？)'
                          placeholder='目標購入時期を入力してください'
                          size='sm'
                          value={itemPeriod}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setItemPeriod(e.target.value)
                          }
                        />
                        <Input
                          id='item-property'
                          label='所有アイテム数(いくつになったら？)'
                          placeholder='目標所有アイテム数を入力してください'
                          size='sm'
                          value={itemProperty}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setItemProperty(e.target.value as unknown as number)
                          }
                        />
                      </div>
                    </div>
                  </>
                )}
              </>
            </div>
            <Button type='submit'>変更</Button>
          </form>
        </Modal>
      )}
      {crud === 'delete' && (
        <Modal param='crud'>
          <div>
            <div className='flex flex-col gap-6'>
              <h2 className='text-[1.8rem] font-bold text-center'>完全に削除しますか？</h2>
              <p className='text-defaultText text-center'>
                「{itemDetailData.name}」を完全に削除しますか？ <br />
                この操作は戻すことができません。
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
              <Button color='dangerRev' onClick={onClickDelete}>
                削除
              </Button>
              <Button color='light' href={closeLink}>
                キャンセル
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {crud === 'move' && (
        <Modal param='crud'>
          <form action='' className='' onSubmit={onSubmitMove}>
            <div className='flex flex-col gap-8 mb-12'>
              <Input
                id='item-name'
                label='アイテム名'
                placeholder='アイテム名を入力してください'
                value={itemName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setItemName(e.target.value)}
              />
              <label htmlFor='item-thumbnail' className='flex flex-col gap-3'>
                <span className='text-[1.4rem] font-bold'>サムネイル</span>
                <div className='flex flex-row gap-4 items-center'>
                  <div className='h-fit p-3 bg-black rounded-full'>
                    <Image
                      src='/assets/img/common/icon_picture.svg'
                      alt='画像'
                      width={100}
                      height={100}
                      className='w-6 h-6'
                    />
                  </div>
                  <span className='text-defaultText'>画像をアップロード</span>
                  <input
                    id='item-thumbnail'
                    type='file'
                    className='hidden'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (e.target.files && e.target.files[0]) {
                        setItemThumbnail(URL.createObjectURL(e.target.files[0]))
                      }
                    }}
                  />
                </div>
              </label>
              <Input
                id='item-score'
                label='スコア'
                placeholder='80'
                value={itemScore}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setItemScore(e.target.value as unknown as number)
                }
              />
              <Input
                id='item-price'
                label='価格'
                placeholder='12,000'
                value={itemPrice}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setItemPrice(e.target.value as unknown as number)
                }
              />
              <Input
                id='item-address'
                label='住所'
                placeholder='衣装ケース'
                value={itemAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setItemAddress(e.target.value)
                }
              />
              <Input
                id='item-date'
                label='購入日'
                placeholder='2019/10/10'
                value={itemPurchaseDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setItemPurchaseDate(e.target.value)
                }
              />
              <Input
                id='item-place'
                label='購入場所'
                placeholder='青山のオーラリー'
                value={itemPurchasePlace}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setItemPurchasePlace(e.target.value)
                }
              />
            </div>
            <Button type='submit'>変更</Button>
          </form>
        </Modal>
      )}
    </>
  )
}

export default ItemModals
