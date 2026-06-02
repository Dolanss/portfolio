param(
  [string]$InputHtml = "pdf/gabriel-oliveira-backend-java.html",
  [string]$OutputPdf = "output/Gabriel-Oliveira-Backend-Java-Portfolio.pdf"
)

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$htmlPath = Resolve-Path -LiteralPath (Join-Path $root $InputHtml)
$outputPath = Join-Path $root $OutputPdf
$outputDir = Split-Path -Parent $outputPath

if (-not (Test-Path -LiteralPath $outputDir)) {
  New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
}

$browserCandidates = @(
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles(x86)\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe"
)

$browser = $browserCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1

if (-not $browser) {
  throw "Chrome or Edge was not found. Install one of them or edit scripts/export-pdf.ps1 with your browser path."
}

if (Test-Path -LiteralPath $outputPath) {
  Remove-Item -LiteralPath $outputPath
}

$htmlUri = ([Uri]$htmlPath.Path).AbsoluteUri
$arguments = @(
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--print-to-pdf=$outputPath",
  "--virtual-time-budget=1000",
  $htmlUri
)

& $browser @arguments | Out-Null

if (-not (Test-Path -LiteralPath $outputPath)) {
  throw "PDF export failed: $outputPath was not created."
}

Write-Host "PDF generated: $outputPath"
