"use client";

import React from "react";

// Wobbly line generator for child-like effect
const wobble = (points: number[], variance: number = 3): string => {
  return points.map((p, i) => {
    if (i % 2 === 0) return p + (Math.random() - 0.5) * variance;
    return p + (Math.random() - 0.5) * variance;
  }).join(" ");
};

export const CatChild: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Body - uneven circle */}
    <ellipse cx="100" cy="130" rx="45" ry="40" fill="#FFA500" stroke="#000" strokeWidth="3"/>
    {/* Head - lopsided circle */}
    <circle cx="100" cy="70" r="35" fill="#FFA500" stroke="#000" strokeWidth="3"/>
    {/* Ears - triangles */}
    <polygon points="72,45 65,15 85,35" fill="#FFA500" stroke="#000" strokeWidth="2"/>
    <polygon points="128,45 135,15 115,35" fill="#FFA500" stroke="#000" strokeWidth="2"/>
    {/* Eyes - different sizes */}
    <circle cx="85" cy="65" r="8" fill="#000"/>
    <circle cx="115" cy="63" r="6" fill="#000"/>
    {/* Nose - triangle */}
    <polygon points="100,78 95,72 105,72" fill="#FF69B4"/>
    {/* Mouth - wobbly */}
    <path d="M 90 85 Q 100 95 110 85" stroke="#000" fill="none" strokeWidth="2"/>
    {/* Whiskers - 3 on each side */}
    <line x1="70" y1="75" x2="40" y2="70" stroke="#000" strokeWidth="2"/>
    <line x1="70" y1="80" x2="38" y2="82" stroke="#000" strokeWidth="2"/>
    <line x1="70" y1="85" x2="42" y2="95" stroke="#000" strokeWidth="2"/>
    <line x1="130" y1="75" x2="160" y2="70" stroke="#000" strokeWidth="2"/>
    <line x1="130" y1="80" x2="162" y2="82" stroke="#000" strokeWidth="2"/>
    <line x1="130" y1="85" x2="158" y2="95" stroke="#000" strokeWidth="2"/>
    {/* Tail - curved line */}
    <path d="M 145 130 Q 170 100 160 150" stroke="#FFA500" fill="none" strokeWidth="15" strokeLinecap="round"/>
    <path d="M 145 130 Q 170 100 160 150" stroke="#000" fill="none" strokeWidth="3"/>
    {/* Legs - simple lines */}
    <line x1="70" y1="160" x2="65" y2="190" stroke="#000" strokeWidth="8" strokeLinecap="round"/>
    <line x1="130" y1="160" x2="135" y2="190" stroke="#000" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export const CatAI: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* More "perfectly imperfect" - trying too hard to be child-like */}
    {/* Body - slightly oval */}
    <ellipse cx="100" cy="135" rx="40" ry="35" fill="#808080" stroke="#333" strokeWidth="2.5"/>
    {/* Head - round but with slight wobble effect */}
    <circle cx="100" cy="75" r="32" fill="#808080" stroke="#333" strokeWidth="2.5"/>
    {/* Inner ears - too detailed for a child */}
    <polygon points="73,50 68,20 88,40" fill="#808080" stroke="#333" strokeWidth="2"/>
    <polygon points="127,50 132,20 112,40" fill="#808080" stroke="#333" strokeWidth="2"/>
    <polygon points="74,45 71,28 84,40" fill="#FFB6C1" strokeWidth="0"/>
    <polygon points="126,45 129,28 116,40" fill="#FFB6C1" strokeWidth="0"/>
    {/* Eyes - too symmetrical */}
    <ellipse cx="87" cy="72" rx="7" ry="8" fill="#90EE90"/>
    <ellipse cx="113" cy="72" rx="7" ry="8" fill="#90EE90"/>
    <circle cx="87" cy="72" r="3" fill="#000"/>
    <circle cx="113" cy="72" r="3" fill="#000"/>
    {/* Nose */}
    <ellipse cx="100" cy="82" rx="5" ry="4" fill="#FFB6C1"/>
    {/* Mouth - too smooth */}
    <path d="M 92 88 Q 100 95 108 88" stroke="#333" fill="none" strokeWidth="2"/>
    {/* Whiskers - evenly spaced */}
    <line x1="72" y1="80" x2="45" y2="75" stroke="#333" strokeWidth="1.5"/>
    <line x1="72" y1="85" x2="45" y2="85" stroke="#333" strokeWidth="1.5"/>
    <line x1="72" y1="90" x2="45" y2="95" stroke="#333" strokeWidth="1.5"/>
    <line x1="128" y1="80" x2="155" y2="75" stroke="#333" strokeWidth="1.5"/>
    <line x1="128" y1="85" x2="155" y2="85" stroke="#333" strokeWidth="1.5"/>
    <line x1="128" y1="90" x2="155" y2="95" stroke="#333" strokeWidth="1.5"/>
    {/* Tail */}
    <path d="M 140 135 C 160 120 165 140 155 160" stroke="#808080" fill="none" strokeWidth="12" strokeLinecap="round"/>
    <path d="M 140 135 C 160 120 165 140 155 160" stroke="#333" fill="none" strokeWidth="2"/>
    {/* Legs - too uniform */}
    <rect x="70" y="165" width="12" height="25" rx="6" fill="#808080" stroke="#333" strokeWidth="2"/>
    <rect x="118" y="165" width="12" height="25" rx="6" fill="#808080" stroke="#333" strokeWidth="2"/>
  </svg>
);

export const HouseChild: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* House base - uneven rectangle */}
    <polygon points="30,180 30,90 170,90 170,180" fill="#FF6B6B" stroke="#000" strokeWidth="3"/>
    {/* Roof - triangle */}
    <polygon points="20,95 100,20 180,95" fill="#8B4513" stroke="#000" strokeWidth="3"/>
    {/* Door - off center */}
    <rect x="55" y="120" width="30" height="60" fill="#8B4513" stroke="#000" strokeWidth="2"/>
    <circle cx="80" cy="150" r="3" fill="#FFD700"/>
    {/* Windows - different sizes, too many! */}
    <rect x="100" y="100" width="20" height="20" fill="#87CEEB" stroke="#000" strokeWidth="2"/>
    <rect x="130" y="100" width="15" height="20" fill="#87CEEB" stroke="#000" strokeWidth="2"/>
    <rect x="100" y="130" width="20" height="18" fill="#87CEEB" stroke="#000" strokeWidth="2"/>
    <rect x="130" y="128" width="15" height="22" fill="#87CEEB" stroke="#000" strokeWidth="2"/>
    <rect x="95" y="155" width="12" height="12" fill="#87CEEB" stroke="#000" strokeWidth="2"/>
    <rect x="140" y="155" width="18" height="15" fill="#87CEEB" stroke="#000" strokeWidth="2"/>
    {/* Chimney */}
    <rect x="140" y="30" width="20" height="45" fill="#8B4513" stroke="#000" strokeWidth="2"/>
    {/* Smoke - curly */}
    <path d="M 150 30 Q 145 15 155 10 Q 165 5 160 -5" stroke="#999" fill="none" strokeWidth="4" strokeLinecap="round"/>
    {/* Sun in corner */}
    <circle cx="25" cy="25" r="15" fill="#FFD700"/>
    <line x1="25" y1="5" x2="25" y2="-5" stroke="#FFD700" strokeWidth="3"/>
    <line x1="45" y1="25" x2="55" y2="25" stroke="#FFD700" strokeWidth="3"/>
    <line x1="40" y1="10" x2="48" y2="2" stroke="#FFD700" strokeWidth="3"/>
    {/* Grass - scribbly */}
    <path d="M 0 185 Q 50 175 100 185 Q 150 195 200 185 L 200 200 L 0 200 Z" fill="#228B22"/>
  </svg>
);

export const HouseAI: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Too neat and planned looking */}
    {/* House base */}
    <rect x="35" y="95" width="130" height="85" fill="#FFB347" stroke="#333" strokeWidth="2.5"/>
    {/* Roof */}
    <polygon points="25,98 100,25 175,98" fill="#CD853F" stroke="#333" strokeWidth="2.5"/>
    {/* Door - perfectly centered */}
    <rect x="85" y="130" width="30" height="50" fill="#8B4513" stroke="#333" strokeWidth="2"/>
    <circle cx="108" cy="155" r="3" fill="#FFD700"/>
    {/* Windows - perfectly symmetrical */}
    <rect x="50" y="110" width="25" height="25" fill="#87CEEB" stroke="#333" strokeWidth="2"/>
    <line x1="62.5" y1="110" x2="62.5" y2="135" stroke="#333" strokeWidth="1.5"/>
    <line x1="50" y1="122.5" x2="75" y2="122.5" stroke="#333" strokeWidth="1.5"/>
    <rect x="125" y="110" width="25" height="25" fill="#87CEEB" stroke="#333" strokeWidth="2"/>
    <line x1="137.5" y1="110" x2="137.5" y2="135" stroke="#333" strokeWidth="1.5"/>
    <line x1="125" y1="122.5" x2="150" y2="122.5" stroke="#333" strokeWidth="1.5"/>
    {/* Chimney - perfectly placed */}
    <rect x="130" y="40" width="18" height="40" fill="#CD853F" stroke="#333" strokeWidth="2"/>
    {/* Smoke - too artistic swirls */}
    <path d="M 139 40 C 135 30 145 25 139 15 C 133 5 143 0 139 -10" stroke="#888" fill="none" strokeWidth="3" strokeLinecap="round"/>
    {/* Path to door */}
    <path d="M 100 180 L 100 200" stroke="#999" strokeWidth="20" strokeLinecap="round"/>
    {/* Flowers - too evenly placed */}
    <circle cx="45" cy="175" r="5" fill="#FF69B4"/>
    <circle cx="155" cy="175" r="5" fill="#FF69B4"/>
    <line x1="45" y1="175" x2="45" y2="185" stroke="#228B22" strokeWidth="2"/>
    <line x1="155" y1="175" x2="155" y2="185" stroke="#228B22" strokeWidth="2"/>
    {/* Grass */}
    <rect x="0" y="180" width="200" height="20" fill="#228B22"/>
  </svg>
);

export const FamilyChild: React.FC = () => (
  <svg viewBox="0 0 250 200" className="w-full h-full max-w-[350px] mx-auto">
    {/* Kid draws themselves BIGGEST */}
    {/* Me (center, biggest) */}
    <circle cx="125" cy="70" r="28" fill="#FFDAB9" stroke="#000" strokeWidth="2"/>
    <circle cx="115" cy="65" r="4" fill="#000"/>
    <circle cx="135" cy="65" r="4" fill="#000"/>
    <path d="M 115 80 Q 125 90 135 80" stroke="#000" fill="none" strokeWidth="2"/>
    <line x1="125" y1="98" x2="125" y2="150" stroke="#000" strokeWidth="4"/>
    <line x1="125" y1="110" x2="95" y2="130" stroke="#000" strokeWidth="3"/>
    <line x1="125" y1="110" x2="155" y2="125" stroke="#000" strokeWidth="3"/>
    <line x1="125" y1="150" x2="110" y2="190" stroke="#000" strokeWidth="3"/>
    <line x1="125" y1="150" x2="140" y2="190" stroke="#000" strokeWidth="3"/>
    {/* Hair - scribbles */}
    <path d="M 100 55 Q 110 35 125 40 Q 140 35 150 55" stroke="#8B4513" fill="none" strokeWidth="8"/>

    {/* Dad (left, smaller than me) */}
    <circle cx="45" cy="90" r="20" fill="#FFDAB9" stroke="#000" strokeWidth="2"/>
    <circle cx="40" cy="87" r="3" fill="#000"/>
    <circle cx="50" cy="87" r="3" fill="#000"/>
    <line x1="38" y1="96" x2="52" y2="96" stroke="#000" strokeWidth="2"/>
    <line x1="45" y1="110" x2="45" y2="155" stroke="#000" strokeWidth="3"/>
    <line x1="45" y1="120" x2="25" y2="140" stroke="#000" strokeWidth="3"/>
    <line x1="45" y1="120" x2="65" y2="140" stroke="#000" strokeWidth="3"/>
    <line x1="45" y1="155" x2="35" y2="190" stroke="#000" strokeWidth="3"/>
    <line x1="45" y1="155" x2="55" y2="190" stroke="#000" strokeWidth="3"/>
    {/* Dad's glasses */}
    <circle cx="40" cy="87" r="6" fill="none" stroke="#000" strokeWidth="1.5"/>
    <circle cx="50" cy="87" r="6" fill="none" stroke="#000" strokeWidth="1.5"/>
    <line x1="46" y1="87" x2="44" y2="87" stroke="#000" strokeWidth="1"/>

    {/* Mom (right, also smaller) */}
    <circle cx="205" cy="85" r="22" fill="#FFDAB9" stroke="#000" strokeWidth="2"/>
    <circle cx="198" cy="82" r="3" fill="#000"/>
    <circle cx="212" cy="82" r="3" fill="#000"/>
    <path d="M 198 92 Q 205 98 212 92" stroke="#000" fill="none" strokeWidth="2"/>
    {/* Mom's dress */}
    <polygon points="205,107 175,180 235,180" fill="#FF69B4" stroke="#000" strokeWidth="2"/>
    {/* Mom's hair - long */}
    <path d="M 183 75 Q 180 100 185 110" stroke="#FFD700" fill="none" strokeWidth="6"/>
    <path d="M 227 75 Q 230 100 225 110" stroke="#FFD700" fill="none" strokeWidth="6"/>
    <path d="M 183 65 Q 205 50 227 65" stroke="#FFD700" fill="none" strokeWidth="8"/>

    {/* Grass */}
    <line x1="0" y1="190" x2="250" y2="190" stroke="#228B22" strokeWidth="3"/>
    {/* Sun */}
    <circle cx="230" cy="25" r="18" fill="#FFD700"/>
  </svg>
);

export const SunChild: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Sun with sunglasses because it's cool */}
    <circle cx="100" cy="100" r="50" fill="#FFD700" stroke="#FFA500" strokeWidth="4"/>
    {/* Rays - uneven */}
    <line x1="100" y1="35" x2="100" y2="10" stroke="#FFD700" strokeWidth="6"/>
    <line x1="100" y1="165" x2="100" y2="195" stroke="#FFD700" strokeWidth="8"/>
    <line x1="35" y1="100" x2="5" y2="100" stroke="#FFD700" strokeWidth="5"/>
    <line x1="165" y1="100" x2="190" y2="100" stroke="#FFD700" strokeWidth="7"/>
    <line x1="55" y1="55" x2="30" y2="30" stroke="#FFD700" strokeWidth="6"/>
    <line x1="145" y1="55" x2="175" y2="25" stroke="#FFD700" strokeWidth="5"/>
    <line x1="55" y1="145" x2="25" y2="170" stroke="#FFD700" strokeWidth="7"/>
    <line x1="145" y1="145" x2="170" y2="175" stroke="#FFD700" strokeWidth="6"/>
    {/* Cool sunglasses */}
    <rect x="70" y="85" width="25" height="18" rx="3" fill="#333"/>
    <rect x="105" y="85" width="25" height="18" rx="3" fill="#333"/>
    <line x1="95" y1="93" x2="105" y2="93" stroke="#333" strokeWidth="3"/>
    {/* Big smile */}
    <path d="M 70 115 Q 100 145 130 115" stroke="#FFA500" fill="none" strokeWidth="4"/>
  </svg>
);

export const FlowerAI: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Too centered, too perfect */}
    <line x1="100" y1="200" x2="100" y2="100" stroke="#228B22" strokeWidth="8"/>
    {/* Leaves - symmetrical */}
    <ellipse cx="80" cy="150" rx="15" ry="8" fill="#228B22" transform="rotate(-30 80 150)"/>
    <ellipse cx="120" cy="150" rx="15" ry="8" fill="#228B22" transform="rotate(30 120 150)"/>
    {/* Petals - perfect circle arrangement */}
    <ellipse cx="100" cy="60" rx="18" ry="25" fill="#FF69B4"/>
    <ellipse cx="130" cy="80" rx="18" ry="25" fill="#FF69B4" transform="rotate(72 130 80)"/>
    <ellipse cx="120" cy="115" rx="18" ry="25" fill="#FF69B4" transform="rotate(144 120 115)"/>
    <ellipse cx="80" cy="115" rx="18" ry="25" fill="#FF69B4" transform="rotate(216 80 115)"/>
    <ellipse cx="70" cy="80" rx="18" ry="25" fill="#FF69B4" transform="rotate(288 70 80)"/>
    {/* Center */}
    <circle cx="100" cy="90" r="15" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
  </svg>
);

export const DogChild: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Dog with 5 legs because he's fast */}
    {/* Body */}
    <ellipse cx="100" cy="110" rx="55" ry="35" fill="#8B4513" stroke="#000" strokeWidth="3"/>
    {/* Head */}
    <circle cx="160" cy="90" r="30" fill="#8B4513" stroke="#000" strokeWidth="3"/>
    {/* Ears - floppy */}
    <ellipse cx="145" cy="65" rx="12" ry="20" fill="#654321" stroke="#000" strokeWidth="2"/>
    <ellipse cx="180" cy="70" rx="10" ry="18" fill="#654321" stroke="#000" strokeWidth="2"/>
    {/* Eyes */}
    <circle cx="155" cy="85" r="5" fill="#000"/>
    <circle cx="172" cy="87" r="4" fill="#000"/>
    {/* Nose */}
    <circle cx="185" cy="95" r="6" fill="#000"/>
    {/* Mouth */}
    <line x1="175" y1="105" x2="188" y2="100" stroke="#000" strokeWidth="2"/>
    {/* 5 LEGS! */}
    <line x1="60" y1="135" x2="50" y2="180" stroke="#8B4513" strokeWidth="10" strokeLinecap="round"/>
    <line x1="80" y1="140" x2="75" y2="185" stroke="#8B4513" strokeWidth="10" strokeLinecap="round"/>
    <line x1="100" y1="140" x2="100" y2="185" stroke="#8B4513" strokeWidth="10" strokeLinecap="round"/>
    <line x1="120" y1="140" x2="125" y2="185" stroke="#8B4513" strokeWidth="10" strokeLinecap="round"/>
    <line x1="140" y1="135" x2="150" y2="180" stroke="#8B4513" strokeWidth="10" strokeLinecap="round"/>
    {/* Tail - wagging */}
    <path d="M 45 100 Q 20 70 30 50" stroke="#8B4513" fill="none" strokeWidth="10" strokeLinecap="round"/>
    <path d="M 45 100 Q 20 70 30 50" stroke="#000" fill="none" strokeWidth="2"/>
    {/* Spots */}
    <circle cx="80" cy="100" r="10" fill="#654321"/>
    <circle cx="110" cy="120" r="8" fill="#654321"/>
  </svg>
);

export const RainbowChild: React.FC = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full max-w-[350px] mx-auto">
    {/* Rainbow with purple twice because it's the best */}
    <path d="M 10 140 Q 100 -20 190 140" stroke="#FF0000" fill="none" strokeWidth="12"/>
    <path d="M 22 140 Q 100 0 178 140" stroke="#FFA500" fill="none" strokeWidth="12"/>
    <path d="M 34 140 Q 100 20 166 140" stroke="#FFFF00" fill="none" strokeWidth="12"/>
    <path d="M 46 140 Q 100 40 154 140" stroke="#00FF00" fill="none" strokeWidth="12"/>
    <path d="M 58 140 Q 100 60 142 140" stroke="#0000FF" fill="none" strokeWidth="12"/>
    <path d="M 70 140 Q 100 80 130 140" stroke="#800080" fill="none" strokeWidth="12"/>
    <path d="M 82 140 Q 100 95 118 140" stroke="#800080" fill="none" strokeWidth="10"/>
    {/* Clouds */}
    <circle cx="25" cy="140" r="20" fill="#FFF" stroke="#CCC" strokeWidth="2"/>
    <circle cx="40" cy="130" r="15" fill="#FFF" stroke="#CCC" strokeWidth="2"/>
    <circle cx="175" cy="140" r="20" fill="#FFF" stroke="#CCC" strokeWidth="2"/>
    <circle cx="160" cy="130" r="15" fill="#FFF" stroke="#CCC" strokeWidth="2"/>
  </svg>
);

export const TreeAI: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Too symmetrical tree */}
    {/* Trunk - centered */}
    <rect x="85" y="120" width="30" height="80" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
    {/* Leaves - perfect triangle layers */}
    <polygon points="100,20 40,80 160,80" fill="#228B22" stroke="#006400" strokeWidth="2"/>
    <polygon points="100,50 35,110 165,110" fill="#228B22" stroke="#006400" strokeWidth="2"/>
    <polygon points="100,80 30,140 170,140" fill="#228B22" stroke="#006400" strokeWidth="2"/>
    {/* Apples - evenly distributed */}
    <circle cx="70" cy="100" r="6" fill="#FF0000"/>
    <circle cx="130" cy="100" r="6" fill="#FF0000"/>
    <circle cx="100" cy="70" r="6" fill="#FF0000"/>
    <circle cx="85" cy="130" r="6" fill="#FF0000"/>
    <circle cx="115" cy="130" r="6" fill="#FF0000"/>
  </svg>
);

export const PersonChild: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Classic kid stick figure with circle body */}
    {/* Big circle head */}
    <circle cx="100" cy="50" r="35" fill="#FFDAB9" stroke="#000" strokeWidth="3"/>
    {/* Eyes - different sizes */}
    <circle cx="88" cy="45" r="6" fill="#000"/>
    <circle cx="115" cy="43" r="5" fill="#000"/>
    {/* Smile */}
    <path d="M 80 65 Q 100 80 120 65" stroke="#000" fill="none" strokeWidth="3"/>
    {/* Hair spikes */}
    <line x1="75" y1="25" x2="70" y2="5" stroke="#8B4513" strokeWidth="4"/>
    <line x1="90" y1="20" x2="88" y2="0" stroke="#8B4513" strokeWidth="4"/>
    <line x1="105" y1="18" x2="107" y2="-2" stroke="#8B4513" strokeWidth="4"/>
    <line x1="120" y1="22" x2="127" y2="5" stroke="#8B4513" strokeWidth="4"/>
    {/* Circle body */}
    <circle cx="100" cy="120" r="30" fill="#4169E1" stroke="#000" strokeWidth="3"/>
    {/* Stick arms */}
    <line x1="70" y1="110" x2="30" y2="90" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round"/>
    <line x1="130" y1="110" x2="170" y2="130" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round"/>
    {/* Stick legs */}
    <line x1="85" y1="148" x2="70" y2="195" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round"/>
    <line x1="115" y1="148" x2="135" y2="195" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round"/>
    {/* Shoes */}
    <ellipse cx="65" cy="195" rx="12" ry="6" fill="#000"/>
    <ellipse cx="140" cy="195" rx="12" ry="6" fill="#000"/>
  </svg>
);

export const CarAI: React.FC = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full max-w-[350px] mx-auto">
    {/* Car that's trying to look child-drawn but too clean */}
    {/* Body */}
    <rect x="30" y="70" width="140" height="45" rx="5" fill="#FF4444" stroke="#333" strokeWidth="2"/>
    {/* Top/cabin */}
    <polygon points="55,70 65,40 135,40 145,70" fill="#FF4444" stroke="#333" strokeWidth="2"/>
    {/* Windows - too perfectly aligned */}
    <polygon points="68,68 75,45 95,45 95,68" fill="#87CEEB" stroke="#333" strokeWidth="1.5"/>
    <polygon points="105,68 105,45 125,45 132,68" fill="#87CEEB" stroke="#333" strokeWidth="1.5"/>
    {/* Wheels - too round */}
    <circle cx="60" cy="115" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="60" cy="115" r="10" fill="#666"/>
    <circle cx="140" cy="115" r="20" fill="#333" stroke="#000" strokeWidth="2"/>
    <circle cx="140" cy="115" r="10" fill="#666"/>
    {/* Headlights */}
    <circle cx="165" cy="90" r="8" fill="#FFFF00" stroke="#333" strokeWidth="1"/>
    {/* Door */}
    <line x1="100" y1="70" x2="100" y2="110" stroke="#333" strokeWidth="2"/>
    <circle cx="95" cy="90" r="3" fill="#333"/>
    {/* Ground line */}
    <line x1="0" y1="135" x2="200" y2="135" stroke="#333" strokeWidth="2"/>
  </svg>
);

export const ButterflyChild: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full max-w-[300px] mx-auto">
    {/* Colorful butterfly with exactly 6 colors */}
    {/* Body */}
    <ellipse cx="100" cy="100" rx="8" ry="40" fill="#000"/>
    {/* Head */}
    <circle cx="100" cy="55" r="10" fill="#000"/>
    {/* Antennae */}
    <path d="M 95 48 Q 85 30 80 25" stroke="#000" fill="none" strokeWidth="2"/>
    <circle cx="80" cy="25" r="4" fill="#FF00FF"/>
    <path d="M 105 48 Q 115 30 120 25" stroke="#000" fill="none" strokeWidth="2"/>
    <circle cx="120" cy="25" r="4" fill="#00FFFF"/>
    {/* Left wings - top */}
    <ellipse cx="60" cy="75" rx="35" ry="25" fill="#FF69B4" stroke="#000" strokeWidth="2" transform="rotate(-20 60 75)"/>
    <circle cx="55" cy="70" r="10" fill="#FFFF00"/>
    <circle cx="45" cy="80" r="6" fill="#FF0000"/>
    {/* Left wings - bottom */}
    <ellipse cx="55" cy="120" rx="30" ry="22" fill="#00FF00" stroke="#000" strokeWidth="2" transform="rotate(20 55 120)"/>
    <circle cx="50" cy="125" r="8" fill="#0000FF"/>
    {/* Right wings - top */}
    <ellipse cx="140" cy="75" rx="35" ry="25" fill="#FF69B4" stroke="#000" strokeWidth="2" transform="rotate(20 140 75)"/>
    <circle cx="145" cy="70" r="10" fill="#FFFF00"/>
    <circle cx="155" cy="80" r="6" fill="#FF0000"/>
    {/* Right wings - bottom */}
    <ellipse cx="145" cy="120" rx="30" ry="22" fill="#00FF00" stroke="#000" strokeWidth="2" transform="rotate(-20 145 120)"/>
    <circle cx="150" cy="125" r="8" fill="#800080"/>
  </svg>
);

// Map content IDs to components
export const drawingComponents: { [key: string]: React.FC } = {
  "cat-child": CatChild,
  "cat-ai": CatAI,
  "house-child": HouseChild,
  "house-ai": HouseAI,
  "family-child": FamilyChild,
  "sun-child": SunChild,
  "flower-ai": FlowerAI,
  "dog-child": DogChild,
  "rainbow-child": RainbowChild,
  "tree-ai": TreeAI,
  "person-child": PersonChild,
  "car-ai": CarAI,
  "butterfly-child": ButterflyChild,
};

export const DrawingDisplay: React.FC<{ drawingId: string }> = ({ drawingId }) => {
  const Component = drawingComponents[drawingId];
  if (!Component) {
    return <div className="text-gray-500">Drawing not found</div>;
  }
  return <Component />;
};
