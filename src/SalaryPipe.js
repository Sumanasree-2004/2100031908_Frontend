import React from 'react';

const SalaryPipe = ({ salary }) => {
  // Assuming salary is a number
  const formattedSalary = `$${salary.toFixed(2)}`;
  return <span>{formattedSalary}</span>;
};

export default SalaryPipe;
