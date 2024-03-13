"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// required modules
import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Sangam Chugh",
    job: "Senior Software Developer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed ipsam voluptates dolorem nihil recusandae enim modi magnam at voluptas?",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Sunil Shetty",
    job: "Technical Architech",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed ipsam voluptates dolorem nihil recusandae enim modi magnam at voluptas?",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Sergiu Nagailic",
    job: "Technical Architech",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed ipsam voluptates dolorem nihil recusandae enim modi magnam at voluptas?",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Hussein Martinez",
    job: "Senior Frontend Engineer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed ipsam voluptates dolorem nihil recusandae enim modi magnam at voluptas?",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Devender Kumar",
    job: "Senior Software Developer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed ipsam voluptates dolorem nihil recusandae enim modi magnam at voluptas?",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Astha Yadav",
    job: "Android Developer",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sed ipsam voluptates dolorem nihil recusandae enim modi magnam at voluptas?",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
