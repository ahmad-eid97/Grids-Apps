'use client';
import React, { useState } from 'react';
//= Components
import { Icon } from '@iconify/react';
//= I18n
import useDictionary from '@/dictionaries/clientDictionary';
//= Types
import { SectionsResponse } from '@/types';
//= Styles
import clsx from 'clsx';
import cls from './faq.module.scss';

type Props = {
  data: SectionsResponse | undefined;
}

export default function FAQ({ data }: Props) {
  const { translations: dictionary, locale } = useDictionary();
  const translations = dictionary.serviceDetails.faq;
  const [questions, setQuestions] = useState(data?.topics?.map(topic => ({
    id: topic.id,
    question: topic.title || '',
    answer: topic.details,
    isExpanded: false
  })) || [
      {
        id: 1,
        question: '',
        answer: '',
        isExpanded: false
      }]);

  function expandItem(id: number) {
    setQuestions(prev => prev.map(question => {
      if (question.id === id) {
        return {
          ...question,
          isExpanded: !question.isExpanded
        }
      }
      return question;
    }))
  }

  return (
    <div className='container'>
      <div className={cls.faq}>
        <div className={cls.header}>
          <h2>{translations.title}</h2>
          <p>Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig. Kronde.</p>
        </div>
        <div className={cls.questions}>
          {
            questions.map((question, index) => (
              <div className={cls.question} key={index}>
                <h4 onClick={() => expandItem(question.id)}>
                  {question.question}
                  <div className={cls.icon}>
                    <Icon icon={question.isExpanded ? "ph:minus-bold" : "heroicons:plus-16-solid"} />
                  </div>
                </h4>
                <p className={clsx({ [cls.expanded]: question.isExpanded })}>{question.answer}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}