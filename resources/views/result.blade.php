<!-- resources/views/result.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Hasil Perhitungan</title>
</head>
<body>
    <h1>Hari Sabtu dan Minggu antara tanggal yang diinputkan adalah:</h1>
    <ul>
        @foreach ($weekends as $day)
            <li>{{ $day }}</li>
        @endforeach
    </ul>
    <a href="{{ url('/reiki') }}">Kembali</a>
</body>
</html>
