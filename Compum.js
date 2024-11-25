import React, { useState } from "react";
import "./CadReceitas.css";
import logo from "./logo_projeto.png";

const CadReceitas = () => {
const [recipeName, setRecipeName] = useState("");
const [preparationTime, setPreparationTime] = useState(0);
const [ingredients, setIngredients] = useState("");
const [preparationSteps, setPreparationSteps] = useState(["", "", ""]);

const handleTimeChange = (event) => {
    const value = Math.max(0, Number(event.target.value));
    setPreparationTime(value);
};

const addPreparationStep = () => {
    setPreparationSteps([...preparationSteps, ""]);
};

const handleStepChange = (index, value) => {
    const steps = [...preparationSteps];
    steps[index] = value;
    setPreparationSteps(steps);
};

return (
    <div className="form-container">
      <div className="form-logo">
        <img src={logo} alt="Logo Cozinha em Bytes" />
      </div>
      <h1 className="form-title">CADASTRAR RECEITAS</h1>
      <div className="form-columns">
        <div className="left-column">
          <label>
            Título da receita
            <input
              type="text"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              placeholder="Digite o título"
              className="form-input"
            />
          </label>
          <label>
            Tempo de preparo
            <input
              type="number"
              value={preparationTime}
              onChange={handleTimeChange}
              placeholder="Em minutos"
              className="form-input"
            />
          </label>
          <label>
            Ingredientes
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Separe por ponto e vírgula (;)"
              className="form-input"
            />
          </label>
        </div>
        <div className="right-column">
          <h2 className="preparation-title">Modo de preparo</h2>
          <div className="preparation-steps">
            {preparationSteps.map((step, index) => (
              <div key={index} className="preparation-step">
                <span className="step-number">{index + 1}</span>
                <input
                  type="text"
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Passo ${index + 1}`}
                  className="step-input"
                />
              </div>
            ))}
          </div>
          <button className="add-step-button" onClick={addPreparationStep}>
            +
          </button>
        </div>
      </div>
      <button type="submit" className="submit-button">
        ENVIAR
      </button>
    </div>
  );
};

export default CadReceitas;
