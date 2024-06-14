import { useParams } from "react-router-dom";

export default function ProjectDescription() {
  const { id } = useParams();

  return <> <br /> Project ID = {id} <br /> <h4> "More details" page about the Project is currently under development and will be available soon. Thank you for your understanding!</h4></>;
}
