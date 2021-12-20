<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

const StarFallStyle = styled.div`
@function random_range($min, $max) {
    $rand: random();
    $random_range: $min + floor($rand \* (($max - $min) + 1));
@return $random_range;
}

position: absolute;
top: 0;
left: 0;
width: 100%;
height: 120%;
// transform: rotate(-90deg);

.star {
$star-count: 50;
--star-color: white;
--star-tail-length: 16em;
--star-tail-height: 0.2px;
--star-width: calc(var(--star-tail-length) / 6);
--fall-duration: 1s;
--tail-fade-duration: var(--fall-duration);

    position: absolute;
    top: var(--top-offset);
    left: 0;
    width: var(--star-tail-length);
    height: var(--star-tail-height);
    color: var(--star-color);
    background: linear-gradient(90deg, currentColor, transparent);
    border-radius: 50%;
    transform: translate3d(104em, 0, 0);
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
      tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

    @include sp-layout {
      // For mobile performance, tail-fade animation will be removed QAQ
      animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
    }

    @for $i from 1 through $star-count {
      &:nth-child(#{$i}) {
        --star-tail-length: #{random_range(2000em, 2500em) / 100};
        --top-offset: #{random_range(0vh, 10000vh) / 100};
        --fall-duration: #{random_range(500, 2000s) / 1000};
        --fall-delay: #{random_range(0, 10000s) / 1000};
      }
    }

}

@keyframes fall {
to {
transform: translate3d(-30em, 0, 0);
}
}

@keyframes tail-fade {
0%,
50% {
width: var(--star-tail-length);
opacity: 1;
}

    70%,
    80% {
      width: 0;
      opacity: 0.4;
    }

    100% {
      width: 0;
      opacity: 0;
    }

}

@keyframes blink {
50% {
opacity: 0.6;
}
}
`;
