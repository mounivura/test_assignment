import React, { useEffect, useState } from "react";

export const Form = ({ views, initialState }) => {
  const { title, children } = views;

  const [formState, setFormState] = useState({});

  useEffect(() => {
    const convertedDate = initialState?.date.split("T")[0];
    setFormState({ ...initialState, date: convertedDate });
  }, [initialState]);

  const onChangeHandler = (event, key) => {
    setFormState((formState) => ({ ...formState, [key]: event.target.value }));
  };

  const onClickHandler = () => {
    console.log(formState);
  };

  const renderTextElement = (view) => {
    return (
      <>
        <input
          name={view.name}
          id={view.path}
          value={formState[view.path]}
          onChange={(e) => onChangeHandler(e, view.path)}
        />
     <label for={view.path}>{view.label}</label>

      </>
    );
  };

  const renderDateElement = (view) => {
    return (
      <>
        <input
          type="date"
          name={view.name}
          id={view.path}
          value={formState[view.path]}
          onChange={(e) => onChangeHandler(e, view.path)}

        />
                  <label for={view.path}>{view.label}</label>

      </>
    );
  };

  const renderButton = (view) => {
    return <button  onClick={onClickHandler}>{view.text}</button>;
  };

  return (
    <>
      <div>{title}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          justifyContent: "flex-start"
        
          
        
        }}
      >
        {Object.keys(children).map((id) => {
          const view = children[id];
          switch (view.component) {
            case "Text": {
              return renderTextElement(view);
            }
            case "Date": {
              return renderDateElement(view);
            }
            case "Command": {
              return renderButton(view);
            }
            default: {
              return null;
            }
          }
        })}
      </div>
    </>
  );
};
