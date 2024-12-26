import {NavLink} from "react-router-dom";

function BackButton(props) {
  return (
    <div className="BackButton">
      <div className="w-fit min-h-8">
        <NavLink to="/explore">
          <button className="group flex items-center gap-2.5 w-fit">
            <div className="flex duration-200 group-hover:text-brand-green">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <p className="uppercase w-fit duration-200 group-hover:text-brand-green">Back</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default BackButton;