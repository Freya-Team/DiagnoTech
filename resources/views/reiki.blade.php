<!DOCTYPE html>
<html>
<head>
    <title>Input Tanggal</title>
</head>
<body>
    <form action="{{ route('calculate') }}" method="POST">
        @csrf
        <label for="start_date">Tanggal Awal (YYYY-MM-DD):</label>
        <input type="date" id="start_date" name="start_date" required>
        <br>
        <label for="end_date">Tanggal Akhir (YYYY-MM-DD):</label>
        <input type="date" id="end_date" name="end_date" required>
        <br>
        <button type="submit">Hitung</button>
    </form>
</body>
</html>