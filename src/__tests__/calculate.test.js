import calculate from '../logic/calculate';

describe('calculate return functions', ()=> {
  it('returns null if AC is clicked', () => {
    const result = calculate({total: '1', next: '1', operation: '+'}, 'AC');
    expect(result).toHaveProperty('total');
    expect(result).toHaveProperty('next');
    expect(result).toHaveProperty('operation');
    expect(result.total).toBe(null);
  });

  it('returns negative number if +/- is clicked', () => {
    const result = calculate({total: '1', next: null, operation: null}, '+/-');
    expect(result).toHaveProperty('total', -1);
    expect(result).toHaveProperty('next', null);
    expect(result).toHaveProperty('operation', null);
  });

  it('returns decimal number if % is clicked', () => {
    const result = calculate({total: '1', next: null, operation: null}, '%');
    expect(result).toHaveProperty('total', 0.01);
    expect(result).toHaveProperty('next', null);
    expect(result).toHaveProperty('operation', null);
  });

  it('returns concatenated number if digit is clicked', () => {
    const result = calculate({total: '1', next: null, operation: null}, '0');
    expect(result).toHaveProperty('total', '10');
    expect(result).toHaveProperty('next', null);
    expect(result).toHaveProperty('operation', null);
  });

  it('updates operation and changes scope if operator is clicked', () => {
    const result = calculate(calculate({total: '1', next: null, operation: null}, '+'), '1');
    expect(result).toHaveProperty('total', '1');
    expect(result).toHaveProperty('next', '1');
    expect(result).toHaveProperty('operation', '+');
  });

  it('return total and resets next and operation when = is clicked', () => {
    const result = calculate({total: '1', next: '1', operation: '+'}, '=');
    expect(result).toHaveProperty('total', '2');
    expect(result).toHaveProperty('next', null);
    expect(result).toHaveProperty('operation', null);
  });
})