import { ReactNode } from "react";
import "./index.scss";
import { X,  } from 'lucide-react';
import { AlertType } from "../Types";

interface IProps {
  type: AlertType,
  icon: ReactNode,
  title:string,
  description?:string,
  children?: ReactNode
}
function Alert({type="alert-succes",icon,title,description,children}: IProps) {
  return (
    <section className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h4>{title}</h4>
        </div>
          <X className="close" size={23}/>
      </div>
      {children ? children : <p>{description}</p>}
    </section>
  );
}

export default Alert;
