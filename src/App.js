import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who is the CEO of Google?',
			answerOptions: [
				{ answerText: 'Sergey Brin', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Sunder Pichai', isCorrect: true },
				{ answerText: 'Satya Nadlla', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the Father of our NAtion?',
			answerOptions: [
				{ answerText: 'Subhas Chandra Bose', isCorrect: false },
				{ answerText: 'Mahatma Gandhi', isCorrect: true },
				{ answerText: 'Jawaharlal Nehru', isCorrect: false },
				{ answerText: 'Sardar Vallabh Bhai Patel', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
