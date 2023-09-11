import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-contain"
        height={50}
        width={50}
        src="/11.png"
        alt="logo here"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
