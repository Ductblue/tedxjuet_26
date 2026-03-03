# Talks Images

Place your talk thumbnail images in this folder.

## Required Images:

1. **talk1.jpg** - Save Me by KĒVENS (Large card - spans 2 rows)
2. **talk2.jpg** - The cost of ignoring women's health by SHEENA FRANKLIN
3. **talk3.jpg** - AI, the Brain, and Our Future by DR. BEREN MILLIDGE
4. **talk4.jpg** - How functional precision medicine could be the future of cancer care by DR. DIANA AZZAM
5. **talk5.jpg** - Breaking Down Barriers for Children with ADHD by DR. KATIE HART

## Image Specifications:

- **Format**: JPG or PNG
- **Recommended dimensions**: 1280x720px (16:9 aspect ratio)
- **File size**: Optimized for web (recommended under 500KB each)

## How to Add Images:

1. Place your images in this folder (`public/talks/`)
2. Name them as specified above (talk1.jpg, talk2.jpg, etc.)
3. The images will automatically appear in the Talks section

## Customizing:

To change the image paths, edit the `talks` array in `/components/Talks.tsx`:

```tsx
const talks = [
  { 
    id: 1, 
    title: 'Your Title', 
    speaker: 'SPEAKER NAME', 
    image: '/talks/your-image.jpg',
    large: true // Set to true for large card
  },
  // ... more talks
]
```
