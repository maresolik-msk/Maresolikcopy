import imgMskV3W1 from "figma:asset/2be49c27e2213382a244bb910beb7652e051b5c1.png";

function Frame() {
  return (
    <div className="h-[135px] relative shrink-0 w-[884px]">
      <p className="absolute bg-clip-text font-['Aquire:Light',sans-serif] leading-[normal] left-0 not-italic text-[154.8px] text-nowrap top-0 tracking-[9.288px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgb(2, 16, 32) 0%, rgb(5, 16, 27) 36.856%, rgb(9, 17, 25) 72.453%, rgb(5, 16, 29) 100%)" }}>
        MARESOLIK
      </p>
    </div>
  );
}

export default function MskV() {
  return (
    <div className="relative size-full" data-name="MSK V3" style={{ backgroundImage: "linear-gradient(90deg, rgb(242, 245, 250) 0%, rgb(244, 248, 252) 35.068%, rgb(245, 249, 254) 66.732%, rgb(246, 250, 255) 98.615%)" }}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative size-full">
          <div className="relative shrink-0 size-[250px]" data-name="MSK V3 W 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMskV3W1} />
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}