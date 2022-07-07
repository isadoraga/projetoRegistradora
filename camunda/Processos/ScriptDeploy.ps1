$uri = ""
$ambiente=[string]$args[0]
$homologacao=[bool]$args[1]

if ($ambiente.Equals(""))
{
    $ambiente="$env:computername";
}

if($homologacao)
{
    $uri = "https://camunda-homolog.zaz.vc/engine-rest/deployment/create";
}
else
{
    $uri = "http://localhost:8080/engine-rest/deployment/create";
}

$username = 'demo'
$password = 'demo'


Get-ChildItem "*.*mn" -Recurse |
Foreach-Object {
    Write-Host $_.Name
    Write-Host $_.FullName
    curl.exe -v -F deploy-changed-only=true -F tenant-id=$ambiente -F file=@"$($_.FullName)" -u "$username`:$password" $uri
}
