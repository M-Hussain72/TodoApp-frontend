export default function AddIcon({ className, onClick }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle:
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <svg
      width="58"
      height="58"
      className={className}
      onClick={() => onClick('addTodoModal')}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_17_249)">
        <circle cx="29" cy="29" r="25" />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.5 39.5C27.5 39.8978 27.658 40.2794 27.9393 40.5607C28.2206 40.842 28.6022 41 29 41C29.3978 41 29.7794 40.842 30.0607 40.5607C30.342 40.2794 30.5 39.8978 30.5 39.5V30.5H39.5C39.8978 30.5 40.2794 30.342 40.5607 30.0607C40.842 29.7794 41 29.3978 41 29C41 28.6022 40.842 28.2206 40.5607 27.9393C40.2794 27.658 39.8978 27.5 39.5 27.5H30.5V18.5C30.5 18.1022 30.342 17.7206 30.0607 17.4393C29.7794 17.158 29.3978 17 29 17C28.6022 17 28.2206 17.158 27.9393 17.4393C27.658 17.7206 27.5 18.1022 27.5 18.5V27.5H18.5C18.1022 27.5 17.7206 27.658 17.4393 27.9393C17.158 28.2206 17 28.6022 17 29C17 29.3978 17.158 29.7794 17.4393 30.0607C17.7206 30.342 18.1022 30.5 18.5 30.5H27.5V39.5Z"
        fill="#F7F7F7"
      />
      <defs>
        <filter
          id="filter0_d_17_249"
          x="0"
          y="0"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_249"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_249"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
