import { CharachterProps, Info } from '@/types/characters';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import loadAnimation from "../../assets/loadPortal-unscreen.gif";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CharactersTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<CharachterProps[]>([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [apiUrl, setApiUrl] = useState<string | null>('https://rickandmortyapi.com/api/character?page=1');
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!apiUrl || !hasMore) return;

    setIsLoading(true);
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCharacters(prevCharacters => {
          const newCharacters = data.results.filter(
            (character: CharachterProps) => !prevCharacters.some((c) => c.id === character.id)
          );
          return [...prevCharacters, ...newCharacters];
        });
        setInfo(data.info);
        if (!data.info.next) {
          setHasMore(false);
        }
      })
  }, [apiUrl, hasMore]);

  useEffect(() => {
    if (info?.next) {
      setApiUrl(info.next);
    } else if (info?.prev) {
      setIsLoading(false)
    }
  }, [info]);

  const sortedCharacters = [...characters].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

  const rows: GridRowsProp = sortedCharacters.map(character => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    origin: character.origin?.name,
    location: character.location?.name,
    image: character.image,
  }));

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50, resizable: false },
    {
      field: 'image',
      headerName: 'Image',
      width: 70,
      resizable: false,
      renderCell: (params) => (
        <div className="flex h-full items-center">
          <Avatar>
            <AvatarImage src={params.value} />
            <AvatarFallback><img src="https://rickandmortyapi.com/api/character/avatar/104.jpeg" alt="avatar image" /></AvatarFallback>
          </Avatar>
        </div>
      ),
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'status', headerName: 'Status', width: 120, resizable: false },
    { field: 'species', headerName: 'Species', width: 150, resizable: false },
    { field: 'gender', headerName: 'Gender', width: 100, resizable: false },
    { field: 'origin', headerName: 'Origin', width: 200 },
    { field: 'location', headerName: 'Location', width: 200 },
  ];

  if (isLoading) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <img src={loadAnimation} alt="load animation" className="w-36" />
      </div>
    );
  }

  return (
    <div className='w-full pt-6 overflow-hidden'>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnResize={false}
        disableColumnMenu
      />
    </div>
  );
}
