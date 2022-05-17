function scuberGreetingForFeet(distanceFeet) {
  if (distanceFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceFeet > 400 && distanceFeet < 2000) {
    return 'That will be twenty bucks.';
  } else if (distanceFeet > 2000 && distanceFeet < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distanceFeet > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
}

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  };
}
