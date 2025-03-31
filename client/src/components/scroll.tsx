import { ContainerScroll } from "@/components/ui/container-scroll-animation";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[100px] pt-[100px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black ">
              Your Crypto Agent Companion <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Quantum Finance
              </span>
            </h1>
          </>
        }
      >
        <img
          src="image.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
