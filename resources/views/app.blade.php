<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>Mushfiqur Rahman — Full-Stack Web Developer</title>
    <meta name="description"
        content="Portfolio of Mushfiqur Rahman, a full-stack web developer building real-world apps with Laravel, React, TypeScript and MySQL. BSc CSE student at AUST.">

    <link rel="icon" type="image/svg+xml" href="/favicon.svg">

    <meta property="og:title" content="Mushfiqur Rahman — Full-Stack Web Developer">
    <meta property="og:description"
        content="Portfolio showcasing projects built with Laravel, React, TypeScript and MySQL.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="/images/mushfiq.jpg">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Mushfiqur Rahman — Full-Stack Web Developer">
    <meta name="twitter:description"
        content="Portfolio showcasing projects built with Laravel, React, TypeScript and MySQL.">
    <meta name="twitter:image" content="/images/mushfiq.jpg">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>