import { Link } from "react-router-dom";
import settings from "../app/settings";
import { HtmlFormType } from "../types/dom";
import { Children } from "../types/global";

type Props = HtmlFormType & {
  title?: string;
  sub_title?: string;
  redirect?: string;
  toText?: string;
  children?: Children;
};
export const FormBody = ({
  title,
  sub_title,
  redirect,
  toText,
  children,
  ...prgs
}: Props) => {
  return (
    <>
      <h2 className="text-center">
        {title || `Welcome back to  ${settings.name}`}
      </h2>
      <p className="text-muted fs-4 text-center">
        {<span dangerouslySetInnerHTML={{ __html: sub_title || "" }}></span> ||
          "Login or New Here "}{" "}
        <Link to={redirect || "/signup"}>{toText || " Sign Up"}</Link>
      </p>
      <form
        {...prgs}
        className="form-horizontal needs-validation was-validated"
      >
        {children}
      </form>
    </>
  );
};
