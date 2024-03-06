
public class string {

		public static void main(String[] args) {
				
			String nome =  "Philippe Wanuty";
			String sobrenome = new String("Costa");
			
			System.out.println(nome);
			System.out.println(sobrenome);
			
			System.out.println(nome.length());
			System.out.println(sobrenome.length());

			// Principais metodos
			System.out.println(nome.length());
			System.out.println(nome.toLowerCase());
			System.out.println(nome.toUpperCase());
			System.out.println(nome.charAt(2));
			System.out.println(nome.isEmpty());
			System.out.println(nome.indexOf("Ph"));
			System.out.println(nome.contains("Ph"));
			System.out.println(nome.concat("Wanuty"));
			System.out.println(nome.equals("philipe wanuty"));
			System.out.println(nome.equalsIgnoreCase("philippe wanuty"));
		}
}
