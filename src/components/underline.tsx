const Underline = ({left = 4, width = "100%"}: {left? : number, width?: string | number}) => {
  console.log("left", left)
  return (
    <svg
      className={`absolute top-[48%] z-10`}
      width="100%"
      height="8"
      viewBox="0 0 170 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${width}`,
        left: `${left}px`,
        filter: "drop-shadow(0 2px 12px #a21caf88)",
      }}
      aria-hidden="true"
    >
      <path
        d="M0 4 Q35 0 85 6 Q135 12 170 4"
        stroke="url(#sharpGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="sharpGradient"
          x1="0"
          y1="4"
          x2="170"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a21caf" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Underline