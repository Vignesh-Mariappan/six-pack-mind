
import SixPackMindIcon from "../assets/logo/six-pack-mind-icon-transparent.png";

const LoadingPage = ({ progressWidth }) => {
  return (
    <div className="flex w-full h-full overflow-hidden flex-col items-center justify-center gap-3">
        <div></div>
        <div className="bg-no-repeat bg-contain bg-center w-[200px] h-[200px]" style={{ backgroundImage: `url(${SixPackMindIcon})` }}></div>
        <progress className="progress progress-primary w-56" value={progressWidth} max="100"></progress>
    </div>
  )
}

export default LoadingPage