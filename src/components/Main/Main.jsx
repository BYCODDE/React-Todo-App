/* eslint-disable react/prop-types */
export default function Main({ dark }) {
  /// TODO: margin-top: -15%;
  return (
    <main className="p-[40px] text-[12px] text-customColor3 font-normal">
      {dark ? (
        <div className="bg-background rounded-md shadow-lg tracking-tighter  text-customColor4  font-normal leading-normal flex justify-between p-[20px]">
          <h3>5 items left</h3>
          <h3>Clear Completed</h3>
        </div>
      ) : (
        <div className="bg-customColor rounded-md shadow-lg  text-customColor2  text-[12px] font-normal leading-normal tracking-tighter flex justify-between p-[20px]">
          <h3>5 items left</h3>
          <h3>Clear Completed</h3>
        </div>
      )}
    </main>
  );
}
