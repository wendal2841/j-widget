module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "ThreeUnits": "48px",
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "OneAndHalfUnits": "24px",
        "Unit": "16px",
        "TwoUnits": "32px",
        "FourUnits": "64px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius2": "2px",
        "Round": "50%",
        "Radius8": "8px"
      },
      "scale": {
        "XLarge": "192px",
        "Large": "144px",
        "Medium": "96px",
        "XXLarge": "288px",
        "Small": "48px",
        "XSmall": "16px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}