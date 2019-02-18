import React from 'react'
import {ThemeConsumer} from '../providers/ThemeProvider';
import { RatingWrapper, ScoreDiv, Score, Rating, } from '../styles/Mobile';

const mRatings = () => (
  <ThemeConsumer>
    {value => (
      <RatingWrapper value={value}>
        <Rating value={value}>
          JavaScript 
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          ReactJS
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          Ruby on Rails
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          HTML/CSS
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          Persuasion
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          Critical Thinking
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          Productivity
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
          </ScoreDiv>
        </Rating>
        <Rating value={value}>
          Fast Learner
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
          </ScoreDiv>
        </Rating>
      </RatingWrapper>
    )}
  </ThemeConsumer>
)

export default mRatings;