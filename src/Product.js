import { useContext } from "react";
import { Button, Table } from "reactstrap";
import { ThemeContext } from "./App";
import { themes } from "./MYAPP";

const Product = ({ data, handleScroll }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="product-wrapper m-5"
      onScroll={(e) => handleScroll(e.target)}
    >
      <Table bordered style={theme === "light" ? themes.light : themes.dark}>
        <tbody>
          {data &&
            data.map((phone, index) => (
              <tr key={index} className="d-flex">
                <td className="p-4" style={{ width: "50%" }}>
                  <div>
                    <img
                      src={phone.images[0]}
                      height="300px"
                      width="300px"
                      alt={phone.images[0]}
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <h5>{phone.title}</h5>
                    <h6>${phone.price}</h6>
                  </div>
                  <div className="">{phone.description}</div>
                </td>
                <td className="p-4" style={{ width: "50%" }}>
                  <Button color="warning">Add to Cart</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Product;
