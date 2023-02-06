import {
  countReducer,
  increaseCounterAC,
  resetCounterAC,
  setAnnouncementAC,
  setMaxValueAC,
  setMinValueAC
} from "./counter-reducer";

test('should change max value',()=>{
  const startState = {
    counter: 0,
    maxValue: 0,
    minValue: 0,
    announcement: 'Choose amount',
    error: false}
  const newMaxValue = 22;

  const endState = countReducer(startState,setMaxValueAC(newMaxValue))

  expect(endState.maxValue).toBe(22)
})

test('should change min value',()=>{
  const startState = {
    counter: 0,
    maxValue: 0,
    minValue: 0,
    announcement: 'Choose amount',
    error: false}
  const newMinValue = 2;

  const endState = countReducer(startState,setMinValueAC(newMinValue))

  expect(endState.minValue).toBe(2)
  expect(endState.maxValue).toBe(0)
})

test('should change counter value',()=>{
  const startState = {
    counter: 1,
    maxValue: 0,
    minValue: 0,
    announcement: 'Choose amount',
    error: false}


  const endState = countReducer(startState,increaseCounterAC())

  expect(endState.counter).toBe(2)

})

test('should reset counter value',()=>{
  const startState = {
    counter: 5,
    maxValue: 0,
    minValue: 0,
    announcement: 'Choose amount',
    error: false}


  const endState = countReducer(startState,resetCounterAC())

  expect(endState.counter).toBe(0)
})

test('should change announcement value',()=>{
  const startState = {
    counter: 7,
    maxValue: 6,
    minValue: 0,
    announcement: 'Choose amount',
    error: false}


  const endState = countReducer(startState,setAnnouncementAC())

  expect(endState.announcement).toBe('Incorrect value')
})