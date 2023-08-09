import React from "react";
import Skeleton from "react-loading-skeleton";

const ListingSkeleton = () => {
  return (
    <>
      <div className="p-1">
        <Skeleton count={10} height={45} />
      </div>
    </>
  );
};

export default ListingSkeleton;
