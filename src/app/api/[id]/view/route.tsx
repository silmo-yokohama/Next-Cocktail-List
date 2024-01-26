import { supabase } from "@/db/supabaseClient";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const { data, error, count } = await supabase
    .from("view")
    .select("*", { count: "exact" })
    .eq("cocktail_id", id);

  if (error) {
    return Response.json({ error: error, status: 500 });
  }

  return Response.json({ data: data, count: count, error: error, status: 200 });
}
