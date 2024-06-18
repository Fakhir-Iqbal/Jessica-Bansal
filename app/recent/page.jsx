"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import { data } from "@/data/data";

function Page() {
  const product = [
    {
      id: 1,
      image: "/recentsales.jpg",
      title: "7835 10th Avenue, Burnaby",
    },
    {
      id: 2,
      image: "/recentsales2.jpg",
      title: "411 E Eighth Avenue, New Westminster",
    },
    {
      id: 3,
      image: "/recentsales3.jpg",
      title: "602-618 Carnarvon St, New Westminster",
    },
    {
      id: 4,
      image: "/recentsales4.jpg",
      title: "602-618 Carnarvon St, New Westminster",
    },
    {
      id: 5,
      image: "/recentsales5.jpg",
      title: "411 E Eighth Avenue, New Westminster",
    },
    {
      id: 6,
      image: "/recentsales6.jpg",
      title: "602-618 Carnarvon St, New Westminster",
    },
  ];

  const router = useRouter();
  const [currentPage, setCurrentPage] = React.useState(0);
  const pageCount = 3;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // const newUrl = `/your-route?page=${selectedPage.selected + 1}`;

    // Update the URL without a full page reload
    // router.push(newUrl, undefined, { shallow: true });
  };

  const handleReloadClick = () => {
    // Use the router.push method with the current route to trigger a page reload
    router.push(router.pathname, undefined, { shallow: true }); // window.loacation.reload();
  };

  return (
    <main>
      <Header />
      <div className="overflow-x-hidden">
        <div className="h-96 bg-white op recentimage">
          <div className="flex flex-col  justify-center items-center h-full ">
            <p
              className="font-phoppin font-semibold text-md py-5"
              style={{ textShadow: "0 0 5px white" }}
            >
              FEATURED HOMES
            </p>
            <span
              className="font-cardo font-medium text-center text-6xl px-5 sm:px-0 sm:text-7xl"
              style={{ textShadow: "0 0 5px white" }}
            >
              Recent Home Sales
            </span>
          </div>
        </div>

        <div className="bg-[#EBECED] py-16 mx-0 flex flex-col space-y-8 sm:space-y-0 sm:grid  grid-cols-3 sm:gap-7 ">
          {data.map((product, index) => (
            <div key={index} className="flex flex-col items-center space-y-7">
              <Link href={`/${product.id}`} aria-label="productpage">
                <Image
                  src={product.image}
                  className="w-[296px] h-[325px] object-cover"
                  width={296}
                  height={325}
                  alt=""
                />
              </Link>
              <Link
                href={`/${product.id}`}
                aria-label="productpage"
              >
                <span className="text-3xl font-cardo w-[296px] cursor-pointer hover:underline hover:underline-offset-4 hover:text-orange-950 inline-block">
                  {product.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <ReactPaginate
          className="flex justify-around py-20 italic font-cardo bg-[#EBECED]"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          previousLabel={
            currentPage === 0 ? null : (
              <span
                className="cursor-pointer hover:underline"
                onclick={handleReloadClick}
                //   onClick={(e) => {
                //   e.preventDefault();
                //   handlePageChange({ selected: currentPage - 1 });
                // }}
              >
                &lt; Older Sales
              </span>
            )
          }
          nextLabel={
            currentPage === pageCount - 1 ? null : (
              <span
                className="cursor-pointer hover:underline"
                onclick={handleReloadClick}
                //   onClick={(e) => {
                //   e.preventDefault();
                //   handlePageChange({ selected: currentPage + 1 });
                // }}
              >
                Newer Sales &gt;
              </span>
            )
          }
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageClassName={"hidden"}
        />
      </div>
    </main>
  );
}

export default Page;
