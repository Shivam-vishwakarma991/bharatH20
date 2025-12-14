# Brand Bottle Images

Place your branded water bottle images in this folder. The component will automatically display them with smooth animations.

## 🖼️ Required Images:

### 1. **250ml.png** (Floating - Top Left)
- **Recommended Size:** 200px × 500px
- **Aspect Ratio:** 1:2.5 (tall bottle)
- **Usage:** Small floating bottle on the left
- **Background:** Transparent PNG (preferred) or white

### 2. **500ml.png** (Floating - Right Middle)
- **Recommended Size:** 220px × 550px
- **Aspect Ratio:** 1:2.5 (tall bottle)
- **Usage:** Medium floating bottle on the right
- **Background:** Transparent PNG (preferred) or white

### 3. **1liter.png** ⭐ (CENTER - MAIN SHOWCASE)
- **Recommended Size:** 280px × 650px
- **Aspect Ratio:** 1:2.5 (tall bottle)
- **Usage:** **Main hero bottle** in center with glow effect
- **Background:** Transparent PNG (preferred) or white
- **Note:** This is the most prominent bottle - use your best product photo!

### 4. **20liter.png** (Floating - Bottom Right)
- **Recommended Size:** 450px × 600px
- **Aspect Ratio:** 1:1.33 (wider jar shape)
- **Usage:** Large jar/dispenser bottle
- **Background:** Transparent PNG (preferred) or white

## 📝 Quick Start:

1. **Add your images** to this folder with exact names:
   - `250ml.png`
   - `500ml.png`
   - `1liter.png` (most important - center display)
   - `20liter.png`

2. **Image format:** PNG with transparent background (or JPG/PNG with white background)

3. **Refresh your browser** - images will appear automatically with animations!

4. **If images don't show:** The component has smart fallback - it will show icon placeholders

## 🎨 Design Guidelines:

### Image Quality:
- **Resolution:** High quality, at least 72 DPI for web
- **File Size:** Optimized for web (under 500KB per image)
- **Format:** PNG with transparent background OR JPG with white background

### Bottle Photography Tips:
1. **Lighting:** Use soft, even lighting to avoid harsh shadows
2. **Angle:** Front-facing shot showing the bottle label clearly
3. **Background:** Transparent or clean white background
4. **Branding:** Ensure your brand logo/label is clearly visible
5. **Shadows:** Subtle drop shadow can add depth (optional)

### Label Requirements:
- Show "Bharat H2O" branding prominently
- Display volume size on the label
- Include any certifications (BIS, etc.)
- Make sure text is readable even when scaled

## Example Structure:
```
/public/brands/
  ├── 250ml.png
  ├── 500ml.png
  ├── 1liter.png
  ├── 2liter.png
  ├── 20liter.png
  └── README.md (this file)
```

## Temporary Placeholders:

Currently, the component shows blue gradient placeholders with droplet icons. Replace these with actual product images to see the full effect of the animations.

## Testing:
After adding images, the component will automatically display them with:
- GSAP scroll animations
- Parallax effects
- Hover scale effects
- Smooth horizontal scrolling
