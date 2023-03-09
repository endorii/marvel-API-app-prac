const Spinner = () => {
    return (
        <svg width="98px" height="98px" display="block" shapeRendering="auto" style={{background: 'none', margin: '0 auto'}} preserveAspectRatio="xMidYMid" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(0 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="-0.8571428571428571s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        <g transform="rotate(51.429 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="-0.7142857142857143s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        <g transform="rotate(102.86 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="-0.5714285714285714s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        <g transform="rotate(154.29 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="-0.42857142857142855s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        <g transform="rotate(205.71 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="-0.2857142857142857s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        <g transform="rotate(257.14 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="-0.14285714285714285s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        <g transform="rotate(-51.429 50 50)">
        <rect x="43.5" y="22.5" width="13" height="13" rx="6.5" ry="6.5" fill="#290908">
        <animate attributeName="opacity" begin="0s" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0"/>
        </rect>
        </g>
        </svg>
    )
}

export default Spinner;