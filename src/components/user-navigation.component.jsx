import AnimationWrapper from "../common/page-animation";
import { Link } from "react-router-dom";

const UserNavigationPannel = () => {
  return (
    <AnimationWrapper 
    transition={{duration: 0.2}}
    >
        <div className="bg-white absolute right-0 border border-grey
        w-60 overflow-hidden duration-200">
            <Link to="/editor"
            className="flex gap-2 link md:hidden pl-8 py-4"
            >
                  <i className="fi fi-rr-file-edit text-xl"></i>
          <p>write</p>
            </Link>
        </div>

    </AnimationWrapper>
  )
}

export default UserNavigationPannel