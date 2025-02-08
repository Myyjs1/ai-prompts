const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 包含 favicon 尺寸的完整尺寸列表
const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];
const iconDir = path.join(__dirname, 'icons');

// 确保图标目录存在
if (!fs.existsSync(iconDir)) {
    fs.mkdirSync(iconDir);
}

// 为每个尺寸生成图标
sizes.forEach(size => {
    sharp('icon.png')
        .resize(size, size)
        .toFile(path.join(iconDir, `icon-${size}x${size}.png`))
        .then(info => console.log(`Generated ${size}x${size} icon`))
        .catch(err => console.error(`Error generating ${size}x${size} icon:`, err));
}); 