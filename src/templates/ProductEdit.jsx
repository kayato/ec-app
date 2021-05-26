import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput, SelectBox, PrimaryButton } from "../components/UIkit";
import { saveProduct } from "../reducks/products/operations";
import ImageArea from "../components/Products/ImageArea";

const ProductEdit = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [images, setImages] = useState([]),
    [price, setPrice] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  const categories = [
    { id: "tops", name: "トップス" },
    { id: "shirts", name: "シャツ" },
    { id: "pants", name: "パンツ" },
  ];

  const genders = [
    { id: "all", name: "全て" },
    { id: "male", name: "メンズ" },
    { id: "femals", name: "レディース" },
  ];

  return (
    <section className="c-section-container">
      <h2 className="u-text__headline u-text-center">商品の登録と編集</h2>
      <div className="c-section-container">
        <ImageArea images={images} setImages={setImages} />
        <TextInput fullWidth={true} label={"商品名"} multiline={false} required={true} rows={1} value={name} type={"name"} onChange={inputName} />
        <TextInput
          fullWidth={true}
          label={"商品説明"}
          multiline={true}
          required={true}
          rows={5}
          value={description}
          type={"description"}
          onChange={inputDescription}
        />
        <SelectBox label={"カテゴリー"} options={categories} select={setCategory} value={category} />
        <SelectBox label={"性別"} options={genders} select={setGender} value={gender} />
        <TextInput fullWidth={true} label={"価格"} multiline={false} required={true} rows={1} value={price} type={"price"} onChange={inputPrice} />
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton label={"商品情報を保存"} onClick={() => dispatch(saveProduct(name, description, category, gender, price, images))} />
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
