import { CalorieCountPipe } from './calorie-count.pipe';

describe('CalorieCountPipe', () => {
  it('create an instance', () => {
    const pipe = new CalorieCountPipe();
    expect(pipe).toBeTruthy();
  });
});
