import React, { useState } from 'react';

const MATERIALS = [
  { name: 'Cement', baseQty: 400, unit: 'bags', unitPrice: 410 },
  { name: 'Steel (TMT Bars)', baseQty: 3, unit: 'tons', unitPrice: 60000 },
  { name: 'M-Sand', baseQty: 20, unit: 'units', unitPrice: 4000 },
  { name: 'P-Sand', baseQty: 7, unit: 'units', unitPrice: 3800 },
  { name: '20mm Aggregate', baseQty: 15, unit: 'units', unitPrice: 3000 },
  { name: '40mm Aggregate', baseQty: 5, unit: 'units', unitPrice: 2500 },
  { name: 'Gravel', baseQty: 26, unit: 'units', unitPrice: 1700 },
  { name: 'Bricks', baseQty: 20000, unit: 'pieces', unitPrice: 9 },
  { name: 'Finishing (Tiles, Paint, etc.)', baseQty: 1, unit: '', unitPrice: 100000 }
];

function MaterialBudgetCalculator() {
  const [area, setArea] = useState(1000);
  const [results, setResults] = useState(null);

  const calculate = () => {
    const factor = area / 1000;
    let total = 0;
    const materials = MATERIALS.map(mat => {
      const qty = mat.name === 'Finishing (Tiles, Paint, etc.)' ? 1 : Math.ceil(mat.baseQty * factor);
      const itemTotal = mat.name === 'Finishing (Tiles, Paint, etc.)' ? mat.unitPrice * factor : qty * mat.unitPrice;
      total += itemTotal;
      return {
        ...mat,
        qty: mat.name === 'Finishing (Tiles, Paint, etc.)' ? 'Est.' : qty + ' ' + mat.unit,
        total: itemTotal
      };
    });
    setResults({ materials, total });
  };

  React.useEffect(() => {
    calculate();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="material-budget-calculator" style={{marginTop: 40, padding: 20, border: '1px solid #ccc', borderRadius: 8}}>
      <h2>Material Budget Calculator</h2>
      <label>Enter Area (sq. ft.): </label>
      <input
        type="number"
        value={area}
        min={100}
        onChange={e => setArea(Number(e.target.value))}
        style={{marginRight: 10}}
      />
      <button onClick={calculate}>Calculate</button>
      {results && (
        <table border="1" cellPadding="5" style={{marginTop: 15, width: '100%', borderCollapse: 'collapse'}}>
          <thead>
            <tr>
              <th>Material</th>
              <th>Quantity Needed</th>
              <th>Unit Price (₹)</th>
              <th>Total Cost (₹)</th>
            </tr>
          </thead>
          <tbody>
            {results.materials.map(item => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.unitPrice}</td>
                <td>{item.total.toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}><strong>Total</strong></td>
              <td><strong>{results.total.toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MaterialBudgetCalculator;