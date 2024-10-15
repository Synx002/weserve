function toggleAccordion(faqId) {
  const answer = document.getElementById(`faq-answer-${faqId}`);
  const arrowDown = document.getElementById(`arrow-down-${faqId}`);
  const arrowUp = document.getElementById(`arrow-up-${faqId}`);
  const isHidden = answer.classList.contains('hidden');
  
  // Close all other answers
  document.querySelectorAll('[id^="faq-answer"]').forEach(el => {
    el.classList.add('hidden');
  });

  // Hide all other arrows (reset)
  document.querySelectorAll('[id^="arrow-down"]').forEach(el => {
    el.classList.remove('hidden');
  });
  document.querySelectorAll('[id^="arrow-up"]').forEach(el => {
    el.classList.add('hidden');
  });

  // Toggle the selected answer
  if (isHidden) {
    answer.classList.remove('hidden');
    arrowDown.classList.add('hidden');  // Hide down arrow
    arrowUp.classList.remove('hidden'); // Show up arrow
  } else {
    answer.classList.add('hidden');
    arrowDown.classList.remove('hidden'); // Show down arrow
    arrowUp.classList.add('hidden');      // Hide up arrow
  }
}