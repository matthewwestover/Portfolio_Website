import React from 'react';
import { RatingWrapper, RatingDiv, Rating, Score, ScoreDiv } from '../styles/Custom';
import { ThemeConsumer } from "../providers/ThemeProvider";

const Ratings = () => (
  <ThemeConsumer>
    {value => (
      <RatingWrapper value={value}>
      <RatingDiv>
        <Rating>
          JavaScript 
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating>
          Persuasion
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
      </RatingDiv>
      <RatingDiv>
        <Rating>
          ReactJS
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating>
          Critical Thinking
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
          </ScoreDiv>
        </Rating>
      </RatingDiv>
      <RatingDiv>
        <Rating>
          Ruby on Rails
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating>
          Productivity
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
          </ScoreDiv>
        </Rating>
      </RatingDiv>
      <RatingDiv>
        <Rating>
          HTML/CSS
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} />
          </ScoreDiv>
        </Rating>
        <Rating>
          Fast Learner
          <ScoreDiv>
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
            <Score value={value} filled />
          </ScoreDiv>
        </Rating>
      </RatingDiv>
    </RatingWrapper>
    )}
  </ThemeConsumer>
)

export default Ratings;