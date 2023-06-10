import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { checkout } from "./checkout";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";
import { BsFire } from "react-icons/bs";

const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Bored Ape",
      id: 1,
      name: "Deepanshu",
      collection: "APE",
      price: "777 ETH",
      like: 903,
      usdPrice: "2,312",
      priceID:"price_1NHIFLSAeCqb57kG2eWTcR6D",
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Rekt Dogs",
      id: 2,
      name: "Deepanshu",
      collection: "Dogs",
      price: "40 ETH",
      usdPrice: "2,313",
      priceID:"price_1NH5V2SAeCqb57kGEoLmg0py",
      like: 300,
      image: images.user1,
      nftImage: images.nft_image_2,
      time: {
        days: 57,
        hours: 31,
        minutes: 42,
        seconds: 51,
      },
    },

    {
      title: "God Of War",
      id: 3,
      name: "Rahul",
      collection: "GOW",
      price: "40 ETH",
      usdPrice: "1,313",
      priceID:"price_1NHIHNSAeCqb57kGPeQ2ONQE",
      like: 300,
      image: images.user2,
      nftImage: images.nft_image_3,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Azuki",
      id: 4,
      name: "Mayank",
      collection: "FIRE",
      price: "150 ETH",
      usdPrice: "1,991",
      priceID:"price_1NHIIOSAeCqb57kG84ofl5fr",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_4,
      time: {
        days: 55,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "Overcast",
      id: 5,
      name: "Shanaya",
      collection: "ELON",
      price: "499 ETH",
      usdPrice: "4,988",
      priceID:"price_1NHIK7SAeCqb57kG3iaVaLFV",
      like: 143,
      image: images.user4,
      nftImage: images.nft_image_5,
      time: {
        days: 37,
        hours: 12,
        minutes: 21,
        seconds: 90,
      },
    },
    {
      title: "Azuki",
      id: 6,
      name: "Mayank",
      collection: "WOOD",
      price: "46 ETH",
      usdPrice: "8,996",
      priceID:"price_1NHILLSAeCqb57kGSHDwKb1g",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_6,
      time: {
        days: 91,
        hours: 22,
        minutes: 54,
        seconds: 2,
      },
    },
    {
      title: "Overcast",
      id: 7,
      name: "Rahul",
      collection: "ZOMBIE",
      price: "34 ETH",
      usdPrice: "6,011",
      priceID:"price_1NHIM8SAeCqb57kGBllmaVQB",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_7,
      time: {
        days: 71,
        hours: 12,
        minutes: 54,
        seconds: 58,
      },
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  // useEffect( () => {
  //   inc();
  // },[] );

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <BsFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}{" "}
                <span>= ${sliderData[idNumber].usdPrice}</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <button className={Style.btn12}
                onClick={(() => {
                  checkout({
                    lineItems: [
                      {
                        price: sliderData[idNumber].priceID,
                        quantity: 1
                      }
                    ]
                  })
                })}
              >
               BUY
              </button>
              {/* <Button btnName="BUY" checkout1={() => {checkout({

                
lineItems:[{
  price:"price_1NGjsXSAeCqb57kGZt7AhEas",
  quantity:1

}]
 
  })}} /> */}

              {/* <Button btnName="SELL" handleClick={() => {}} /> */}
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;