#!/usr/bin/env node

/**
 * SEO Check Script
 * Проверяет базовые SEO-требования в HTML
 * Запуск: node scripts/seo-check.js
 */

const fs = require('fs');
const path = require('path');

// Цвета для консоли
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) {
    log(`❌ Файл не найден: ${filePath}`, 'red');
    return false;
  }
  log(`✅ Файл существует: ${filePath}`, 'green');
  return true;
}

function checkHtml(filePath) {
  log('\n📄 Проверка HTML...', 'blue');
  
  if (!fs.existsSync(filePath)) {
    log('❌ index.html не найден', 'red');
    return false;
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const checks = {
    'lang="en-GB"': html.includes('lang="en-GB"'),
    '<title>': html.includes('<title>') && html.match(/<title>(.+?)<\/title>/)?.[1]?.length > 0,
    'Meta description': html.includes('name="description"'),
    'Meta viewport': html.includes('name="viewport"'),
    'Favicon': html.includes('rel="icon"'),
    'No duplicate H1': (html.match(/<h1/g) || []).length <= 1
  };

  let passed = true;
  Object.entries(checks).forEach(([check, result]) => {
    if (result) {
      log(`  ✅ ${check}`, 'green');
    } else {
      log(`  ❌ ${check}`, 'red');
      passed = false;
    }
  });

  // Проверка длины title
  const titleMatch = html.match(/<title>(.+?)<\/title>/);
  if (titleMatch) {
    const titleLength = titleMatch[1].length;
    if (titleLength > 60) {
      log(`  ⚠️  Title слишком длинный (${titleLength} символов, рекомендуется ≤60)`, 'yellow');
    }
  }

  // Проверка длины description
  const descMatch = html.match(/name="description"\s+content="(.+?)"/);
  if (descMatch) {
    const descLength = descMatch[1].length;
    if (descLength > 160) {
      log(`  ⚠️  Description слишком длинный (${descLength} символов, рекомендуется ≤160)`, 'yellow');
    }
  }

  return passed;
}

function checkRobotsTxt() {
  log('\n🤖 Проверка robots.txt...', 'blue');
  
  const robotsPath = path.join(__dirname, '../src/robots.txt');
  if (!checkFile(robotsPath)) {
    return false;
  }

  const content = fs.readFileSync(robotsPath, 'utf-8');
  const checks = {
    'User-agent': content.includes('User-agent:'),
    'Allow или Disallow': content.includes('Allow:') || content.includes('Disallow:'),
    'Sitemap': content.includes('Sitemap:')
  };

  let passed = true;
  Object.entries(checks).forEach(([check, result]) => {
    if (result) {
      log(`  ✅ ${check}`, 'green');
    } else {
      log(`  ❌ ${check}`, 'red');
      passed = false;
    }
  });

  return passed;
}

function checkSitemap() {
  log('\n🗺️  Проверка sitemap.xml...', 'blue');
  
  const sitemapPath = path.join(__dirname, '../src/sitemap.xml');
  if (!checkFile(sitemapPath)) {
    return false;
  }

  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const checks = {
    'XML declaration': content.startsWith('<?xml'),
    '<urlset>': content.includes('<urlset'),
    '<url>': content.includes('<url>'),
    '<loc>': content.includes('<loc>'),
    'Homepage included': content.includes('https://tokenoversity.com/')
  };

  let passed = true;
  Object.entries(checks).forEach(([check, result]) => {
    if (result) {
      log(`  ✅ ${check}`, 'green');
    } else {
      log(`  ❌ ${check}`, 'red');
      passed = false;
    }
  });

  // Подсчет количества URL
  const urlCount = (content.match(/<url>/g) || []).length;
  log(`  ℹ️  Количество URL в sitemap: ${urlCount}`, 'blue');

  return passed;
}

function checkImages() {
  log('\n🖼️  Проверка изображений...', 'blue');
  
  const requiredImages = [
    'public/images/og-home.webp',
    'public/images/og-default.webp',
    'public/images/logo.svg'
  ];

  let allExist = true;
  requiredImages.forEach(img => {
    const imgPath = path.join(__dirname, '..', img);
    if (fs.existsSync(imgPath)) {
      log(`  ✅ ${img}`, 'green');
    } else {
      log(`  ⚠️  Отсутствует: ${img}`, 'yellow');
      allExist = false;
    }
  });

  return allExist;
}

function main() {
  log('\n🔍 SEO Check для Tokenoversity', 'blue');
  log('='.repeat(50), 'blue');

  const htmlPath = path.join(__dirname, '../src/index.html');
  
  const results = {
    html: checkHtml(htmlPath),
    robots: checkRobotsTxt(),
    sitemap: checkSitemap(),
    images: checkImages()
  };

  log('\n' + '='.repeat(50), 'blue');
  log('📊 Результаты проверки:', 'blue');
  
  const passed = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;
  
  if (passed === total) {
    log(`\n✅ Все проверки пройдены! (${passed}/${total})`, 'green');
    process.exit(0);
  } else {
    log(`\n⚠️  Пройдено проверок: ${passed}/${total}`, 'yellow');
    log('Исправьте ошибки выше и запустите снова.', 'yellow');
    process.exit(1);
  }
}

main();
