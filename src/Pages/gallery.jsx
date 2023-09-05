import React, { useEffect, useState } from "react";

const gallery = () => {
  const galleryData = [
    // { id: 1, category: "logos", path: "/assets/banter-fri.jpg" },
    { id: 2, category: "logos", path: "/assets/banter-fri1.jpg" },
    { id: 3, category: "logos", path: "/assets/banter-fri2.jpg" },
    { id: 4, category: "Graphic Designing", path: "/assets/banter.jpg" },
    { id: 5, category: "Graphic Designing", path: "/assets/cata.jpg" },
    { id: 6, category: "Graphic Designing", path: "/assets/cata-lineup.jpg" },
    { id: 7, category: "Mock ups", path: "/assets/evva-date1.jpg" },
    { id: 8, category: "Mock ups", path: "/assets/evva-fri.jpg" },
    { id: 9, category: "Mock ups", path: "/assets/evva.jpg" },
    { id: 10, category: "Printing Designing", path: "/assets/sky.jpg" },
    { id: 11, category: "Printing Designing", path: "/assets/sky2.jpg" },
    { id: 12, category: "Printing Designing", path: "/assets/SKY-fri.jpg" },
  ];

  const [myGallery, SetmyGallery] = useState(galleryData);

  // useEffect(() => {
  //   SetmyGallery(galleryData);
  // }, []);

  const filterFun = (selectedBtn) => {
    const filterContent = galleryData.filter((galery) => {
      return galery.category === selectedBtn;
    });
    // console.warn("filter=> ", filterContent);
    SetmyGallery(filterContent);
  };

  return (
    <>
      <div className="Gallery  text-white  ">
        <div className="text-center px-[10%] sm:px-[20%] mt-5 ">
          <div className="header_gallery   flex justify-around flex-wrap gap-2">
            <div
              className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] px-5 rounded-md cursor-pointer"
              onClick={() => SetmyGallery(galleryData)}
            >
              All
            </div>
            <div
              className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] px-5 rounded-md cursor-pointer"
              onClick={() => filterFun("logos")}
            >
              Logos
            </div>
            <div
              className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] px-5 rounded-md cursor-pointer"
              onClick={() => filterFun("Graphic Designing")}
            >
              Graphic Designing
            </div>
            <div
              className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] px-5 rounded-md cursor-pointer"
              onClick={() => filterFun("Printing Designing")}
            >
              Printing Designing
            </div>
            <div
              className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] px-5 rounded-md cursor-pointer"
              onClick={() => filterFun("Mock ups")}
            >
              Mock up
            </div>
          </div>
          {/* my image Gallery */}
          <div className="body_gallery mt-4 flex flex-wrap gap-4  pb-[90px]">
            {myGallery.map((image, index) => {
              return (
                <>
                  <div
                    className="image_gallery flex-[1_0_20%] rounded"
                    key={index}
                  >
                    <img
                      src={image.path}
                      alt=""
                      className="rounded"
                      width={"100%"}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default gallery;
