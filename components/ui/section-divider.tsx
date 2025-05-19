import { cn } from "@/lib/utils"

export interface SectionDividerProps {
  className?: string
  variant?: "wave" | "curve" | "tilt" | "curveAlt" | "tiltAlt" | "waveAlt"
  position?: "top" | "bottom" | "both"
  fill?: string
  height?: number
}

export function SectionDivider({
  className,
  variant = "wave",
  position = "bottom",
  fill = "fill-white",
  height = 60,
}: SectionDividerProps) {
  const isTop = position === "top"

  const dividers = {
    waveAlt: (
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1200 390"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`transition duration-300 ease-in-out delay-150 h-[${height}px] w-full`, !isTop && "rotate-180", className)}
      >
        <path d="M 0,400 L 0,100 C 75.86410256410255,121.65641025641025 151.7282051282051,143.3128205128205 233,126 C 314.2717948717949,108.68717948717949 400.9512820512821,52.40512820512821 472,56 C 543.0487179487179,59.59487179487179 598.4666666666666,123.06666666666666 688,149 C 777.5333333333334,174.93333333333334 901.1820512820511,163.32820512820513 980,140 C 1058.8179487179489,116.67179487179487 1092.805128205128,81.62051282051281 1162,73 C 1231.194871794872,64.37948717948719 1335.5974358974358,82.18974358974359 1440,100 L 1440,400 L 0,400 Z"
          stroke="none" width="100%" opacity="0.33" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-0")} > </path>
        <path d="M 0,400 L 0,233 C 67.48461538461538,229.81025641025641 134.96923076923076,226.62051282051283 210,211 C 285.03076923076924,195.37948717948717 367.60769230769233,167.32820512820516 461,186 C 554.3923076923077,204.67179487179484 658.5999999999999,270.06666666666666 751,281 C 843.4000000000001,291.93333333333334 923.9923076923076,248.40512820512822 986,226 C 1048.0076923076924,203.59487179487178 1091.4307692307693,202.3128205128205 1164,207 C 1236.5692307692307,211.6871794871795 1338.2846153846153,222.34358974358975 1440,233 L 1440,400 L 0,400 Z"
          stroke="none" width="100%" strokeWidth="0" fillOpacity="1" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-1")}></path >
      </svg>
    ),
    wave: (
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1200 390"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`transition duration-300 ease-in-out delay-150 h-[${height}px] w-full`, !isTop && "rotate-180", className)}
      >
        <path d="M 0,400 L 0,100 C 94.82142857142858,88.78571428571428 189.64285714285717,77.57142857142857 306,86 C 422.35714285714283,94.42857142857143 560.2499999999999,122.5 706,114 C 851.7500000000001,105.5 1005.3571428571429,60.42857142857143 1129,52 C 1252.642857142857,43.57142857142857 1346.3214285714284,71.78571428571428 1440,100 L 1440,400 L 0,400 Z"
          stroke="none" width="0" opacity="0.20" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-0")} > </path>
        <path d="M 0,400 L 0,233 C 90.21428571428572,241.64285714285714 180.42857142857144,250.28571428571428 302,253 C 423.57142857142856,255.71428571428572 576.5000000000001,252.5 723,239 C 869.4999999999999,225.5 1009.5714285714284,201.7142857142857 1128,199 C 1246.4285714285716,196.2857142857143 1343.2142857142858,214.64285714285717 1440,233 L 1440,400 L 0,400 Z"
          stroke="none" strokeWidth="0" fillOpacity="1" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-1")}></path >
      </svg>
    ),
    tiltAlt: (
      <svg
        viewBox="0 0 1392 211"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`transition duration-300 ease-in-out delay-150 h-[${height}px] w-full`, isTop && "rotate-180", className)}
      >
        <path className={fill} d="M 0 58 L 711 110 L 711 0 L 0 0 Z" strokeWidth="0"></path>
        <path className={fill} d="M 710 110 L 1392 156 L 1392 0 L 710 0 Z" strokeWidth="0"></path>
      </svg>
    ),
    tilt: (
      <svg id="wave"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        className={cn(`transition duration-300 ease-in-out delay-150 h-[${height}px] w-full`, !isTop && "rotate-180", className)}
        viewBox="0 0 1440 400" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        {/* <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0" >
            <stop color="rgba(62, 132, 243, 1)" offset="0%" > </stop>
            <stop stopColor="rgba(62, 132, 243, 1)" offset="100%"></stop >
          </linearGradient>
        </defs > */}
        <path
          // fill="url(#sw-gradient-0)" 
          className={fill}
          d="M0,40L1440,280L2880,320L4320,40L5760,160L7200,0L8640,200L10080,120L11520,40L12960,360L14400,80L15840,40L17280,120L18720,0L20160,240L21600,200L23040,200L24480,280L25920,40L27360,0L28800,200L30240,80L31680,360L33120,160L34560,0L34560,400L33120,400L31680,400L30240,400L28800,400L27360,400L25920,400L24480,400L23040,400L21600,400L20160,400L18720,400L17280,400L15840,400L14400,400L12960,400L11520,400L10080,400L8640,400L7200,400L5760,400L4320,400L2880,400L1440,400L0,400Z" > </path>
      </svg >
    ),
    curve: (
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1400 550"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`transition duration-300 ease-in-out delay-150 h-[${height}px] w-full`, !isTop && "rotate-180", className)}
      >        <path d="M 0,600 L 0,600 C 241,396 482,192 722,192 C 962,192 1201,396 1440,600 L 1440,600 L 0,600 Z"
        stroke="none" strokeWidth="0" fillOpacity="0.35" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-0")}></path>
        <path d="M 0,600 L 0,600 C 256.5,441.5 513,283 753,283 C 993,283 1216.5,441.5 1440,600 L 1440,600 L 0,600 Z"
          stroke="none" strokeWidth="0" fillOpacity="1" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-1")}></path>
      </svg>
    ),
    curveAlt: (
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 1400 550"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(`transition duration-300 ease-in-out delay-150 h-[${height}px] w-full`, !isTop && "rotate-180", className)}
      >
        <path d="M 0,500 L 0,500 C 89.59808612440187,341.98086124401914 179.19617224880375,183.96172248803828 284,116 C 388.80382775119625,48.038277511961724 508.8133971291867,70.13397129186603 616,89 C 723.1866028708133,107.86602870813397 817.5502392344499,123.50239234449761 904,107 C 990.4497607655501,90.49760765550239 1068.9856459330144,41.85645933014354 1157,102 C 1245.0143540669856,162.14354066985646 1342.5071770334928,331.07177033492826 1440,500 L 1440,500 L 0,500 Z"
          stroke="none" strokeWidth="0" fillOpacity="0.35" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-0")}></path>
        <path d="M 0,500 L 0,500 C 102.11483253588514,394.8612440191388 204.22966507177028,289.72248803827756 310,245 C 415.7703349282297,200.27751196172247 525.1961722488039,215.9712918660287 629,239 C 732.8038277511961,262.0287081339713 830.9856459330142,292.39234449760767 907,297 C 983.0143540669858,301.60765550239233 1036.861244019139,280.4593301435407 1122,310 C 1207.138755980861,339.5406698564593 1323.5693779904304,419.77033492822966 1440,500 L 1440,500 L 0,500 Z"
          stroke="none" strokeWidth="0" fillOpacity="1" className={cn(fill, "transition-all duration-300 ease-in-out delay-150 path-1")}></path>
      </svg>
    )

  }

  return (
    <div
      id="section-decoration"
      className={cn(
        "w-full overflow-hidden line-height-0 z-10",
        // isTop && "rotate-180"
        // Negative margin to avoid gaps
      )}
      style={{ height: `${height}px` }}
    >
      {dividers[variant]}
    </div>
  )
}